function initBacket() {
    let count = getCount();
    console.log($('#basket'))
    if (count == 0) {
        // $('#counter'.)
        console.log('asd')
        // console.log($('#basket')[0].setAttribute('display', 'none'));
        // console.log($('#basket')[0].setAttribute('display', 'none'));
        init();
        $('#basket').hide();
    } else {
        // $('#basket')[0].css('visibility', 'visible');
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
        $('#basket')[0].setAttribute('visibility', 'visible');
        $('#counter')[0].textContent = count;
    }
}

function removeFromBacket(name) {
    let count = getCount();
    console.log(count);
    if (count > 0) {
        remove(name);
    }
    count = getCount();
    if (count === 0) {
        $('#counter')[0].textContent = count;
        $('#basket')[0].setAttribute('display', 'none');
    } else {
        $('#counter')[0].textContent = count;
    }
}