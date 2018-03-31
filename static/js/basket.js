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
}