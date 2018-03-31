function initBacket() {
    let count = getCount();
    if (count == 0) {
        init();
        $('#basket').hide();
    } else {
        $('#basket').show();
        $('#counter')[0].textContent = count;
    }
}

function addInBacket(name) {
    let count = getCount();

    if (count > 99) {
        Materialize.toast('Нельзя добавлять столько продуктов', 1500, 'rounded red');
        return;
    }

    add(name);
    count = getCount();
    Materialize.toast('Продукт добавлен в корзину', 1500, 'rounded green');

    if (count > 0) {
        $('#basket').show();
        $('#counter')[0].textContent = count;
    }
}

function removeFromBacket(name) {
    let count = getCount();
    if (count > 0) {
        remove(name);
    }
    count = getCount();
    if (count === 0) {
        $('#counter')[0].textContent = count;
        $('#basket').hide();
    } else {
        $('#counter')[0].textContent = count;
    }

    createListOffers();
}

function deleteAllProductFromBacket(name) {
    deleteAll(name);
    let count = getCount();
    // console.log(count);
    if (count === 0) {
        $('#openedBasket').modal('close');
        $('#counter')[0].textContent = count;
        $('#basket').hide();
    } else {
        $('#counter')[0].textContent = count;
    }

    createListOffers();
}

function createListOffers() {
    let offers = JSON.parse(localStorage.getItem('offers'));

    function createDeleteButton(name) {
        return `<a class="secondary-content" style="cursor: pointer" onclick="deleteAllProductFromBacket('${name}');"><i class="material-icons">delete</i></a>`
    }

    function createRow(product) {
        return `
            <tr>
                <td>${product.name}</td>
                <td>${product.totalPrice}</td>
                <td>${createDeleteButton(product.name)}</td>
            </tr>
        `;
    }

    if (offers) {
        $('#listOffers').empty();
        for (let i = 0; i < offers.length; i++) {
            if (offers[i].count > 0) {
                // console.log(createRow(offers[i]))
                $('#listOffers').append(createRow(offers[i]))
            }
        }
    }
}