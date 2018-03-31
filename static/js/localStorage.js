function init() {
    function buildProduct(name) {
        return {
            name,
            count: 0,
            totalPrice: 0
        }
    }

    if (!localStorage.getItem('offers')) {
        localStorage.setItem('offers', JSON.stringify([
            buildProduct('шаурма лаваш с курицей'),
            buildProduct('шаурма лаваш со свининой'),

            buildProduct('шаурма лепешка с курицей'),
            buildProduct('шаурма лепешка со свининой'),

            buildProduct('шашлык из курицы'),
            buildProduct('шашлык из свиной шейки'),
            buildProduct('люля-кебаб из свинины'),
            buildProduct('куриные крылышки'),

            buildProduct('картофель на шампуре'),
            buildProduct('грибы на шампуре'),

            buildProduct('соус шашлычный'),
        ]));
    }
}

function add(name) {
    let offers = JSON.parse(localStorage.getItem('offers'));

    function addItem(name, price) {
        for (let i = 0; i < offers.length; i++) {
            if (name === offers[i].name) {
                offers[i].count++;
                offers[i].totalPrice += price;
                break;
            }
        }
    }

    switch (name) {
        case 'шаурма лаваш с курицей':
            addItem('шаурма лаваш с курицей', 90);
            break;

        case 'шаурма лаваш со свининой':
            addItem('шаурма лаваш со свининой', 100);
            break;

        case 'шаурма лепешка с курицей':
            addItem('шаурма лепешка с курицей', 90);
            break;

        case 'шаурма лепешка со свининой':
            addItem('шаурма лепешка со свининой', 100);
            break;

        case 'шашлык из курицы':
            addItem('шашлык из курицы', 80);
            break;

        case 'шашлык из свиной шейки':
            addItem('шашлык из свиной шейки', 90);
            break;

        case 'люля-кебаб из свинины':
            addItem('люля-кебаб из свинины', 80);
            break;

        case 'куриные крылышки':
            addItem('куриные крылышки', 90);
            break;

        case 'картофель на шампуре':
            addItem('картофель на шампуре', 60);
            break;

        case 'грибы на шампуре':
            addItem('грибы на шампуре', 120);
            break;

        case 'соус шашлычный':
            addItem('соус шашлычный', 25);
            break;
    }

    localStorage.setItem('offers', JSON.stringify(offers));
}

function getCount() {
    let offers = JSON.parse(localStorage.getItem('offers'));
    let count = 0;
    for (let i = 0; i < offers.length; i++) {
        count += offers[i].count;
    }

    return count;
}

function remove(name) {
    let offers = JSON.parse(localStorage.getItem('offers'));

    function removeitem(name, price) {
        for (let i = 0; i < offers.length; i++) {
            if (name === offers[i].name) {
                if (offers[i].count > 0) {
                    offers[i].count--;
                }
                if (offers[i].totalPrice > 0) {
                    offers[i].totalPrice -= price;
                }
                break;
            }
        }
    }

    switch (name) {
        case 'шаурма лаваш с курицей':
            removeitem('шаурма лаваш с курицей', 90);
            break;

        case 'шаурма лаваш со свининой':
            removeitem('шаурма лаваш со свининой', 100);
            break;

        case 'шаурма лепешка с курицей':
            removeitem('шаурма лепешка с курицей', 90);
            break;

        case 'шаурма лепешка со свининой':
            removeitem('шаурма лепешка со свининой', 100);
            break;

        case 'шашлык из курицы':
            removeitem('шашлык из курицы', 80);
            break;

        case 'шашлык из свинной шейки':
            removeitem('шашлык из свинной шейки', 90);
            break;

        case 'люля-кебаб из свинины':
            removeitem('люля-кебаб из свинины', 80);
            break;

        case 'куриные крылышки':
            removeitem('куриные крылышки', 90);
            break;

        case 'картофель на шампуре':
            removeitem('картофель на шампуре', 60);
            break;

        case 'грибы на шампуре':
            removeitem('грибы на шампуре', 120);
            break;

        case 'соус шашлычный':
            removeitem('соус шашлычный', 25);
            break;
    }

    localStorage.setItem('offers', JSON.stringify(offers));
}
