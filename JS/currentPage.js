const content = document.getElementById('content');
const pageButtons = document.querySelectorAll('.page-button');
const itemsPerPage = 4;
const items = [
    {headerTxt: 'Эвакуатор1', img:'images/photos/Photo1.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '5 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: '4 000 руб', rowTxt4: 'Микроавтобус', rowsPrice4: '6 000 руб', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"63"  },
    {headerTxt: 'Эвакуатор2', img:'images/photos/Photo2.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '4 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: 'нет', rowTxt4: 'Микроавтобус', rowsPrice4: 'нет', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"64",  },
    {headerTxt: 'Эвакуатор3', img:'images/photos/Photo1.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '5 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: '4 000 руб', rowTxt4: 'Микроавтобус', rowsPrice4: '6 000 руб', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"65"  },
    {headerTxt: 'Эвакуатор4', img:'images/photos/Photo2.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '4 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: 'нет', rowTxt4: 'Микроавтобус', rowsPrice4: 'нет', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"66"  },
    {headerTxt: 'Эвакуатор5', img:'images/photos/Photo1.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '5 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: '4 000 руб', rowTxt4: 'Микроавтобус', rowsPrice4: '6 000 руб', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"67"  },
    {headerTxt: 'Эвакуатор6', img:'images/photos/Photo2.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '4 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: 'нет', rowTxt4: 'Микроавтобус', rowsPrice4: 'нет', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"68",  },
    {headerTxt: 'Эвакуатор7', img:'images/photos/Photo1.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '5 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: '4 000 руб', rowTxt4: 'Микроавтобус', rowsPrice4: '6 000 руб', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"69"  },
    {headerTxt: 'Эвакуатор8', img:'images/photos/Photo2.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '4 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: 'нет', rowTxt4: 'Микроавтобус', rowsPrice4: 'нет', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"70"  },
    {headerTxt: 'Эвакуатор9', img:'images/photos/Photo1.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '5 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: '4 000 руб', rowTxt4: 'Микроавтобус', rowsPrice4: '6 000 руб', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"71"  },
    {headerTxt: 'Эвакуатор10', img:'images/photos/Photo2.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '4 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: 'нет', rowTxt4: 'Микроавтобус', rowsPrice4: 'нет', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"72",  },
    {headerTxt: 'Эвакуатор11', img:'images/photos/Photo1.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '5 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: '4 000 руб', rowTxt4: 'Микроавтобус', rowsPrice4: '6 000 руб', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"73"  },
    {headerTxt: 'Эвакуатор12', img:'images/photos/Photo2.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '4 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: 'нет', rowTxt4: 'Микроавтобус', rowsPrice4: 'нет', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"74"  },
    {headerTxt: 'Эвакуатор13', img:'images/photos/Photo1.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '5 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: '4 000 руб', rowTxt4: 'Микроавтобус', rowsPrice4: '6 000 руб', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"75"  },
    {headerTxt: 'Эвакуатор14', img:'images/photos/Photo2.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '4 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: 'нет', rowTxt4: 'Микроавтобус', rowsPrice4: 'нет', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"76",  },
    {headerTxt: 'Эвакуатор15', img:'images/photos/Photo1.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '5 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: '4 000 руб', rowTxt4: 'Микроавтобус', rowsPrice4: '6 000 руб', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"77"  },
    {headerTxt: 'Эвакуатор16', img:'images/photos/Photo2.jpg', rowTxt1: 'Легковой автомобиль', rowsPrice1: '4 000 руб', rowTxt2: 'Мотоцикл (квадроцикл и т.д.)', rowsPrice2: '3 000 руб', rowTxt3: 'Внедорожник', rowsPrice3: 'нет', rowTxt4: 'Микроавтобус', rowsPrice4: 'нет', rowTxt5: 'Загородный тариф', rowsPrice5: '50 руб/км', telMob: '+7 999 99 99', telCity: '+7 999 99 99', address: 'Москва, ул Пушкина', id:"78"  },

];

let currentPage = 1;
const totalPages = Math.ceil(items.length / itemsPerPage);

function loadItems(page) {
    content.innerHTML = ''; // Очистка контента перед загрузкой новых блоков
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToLoad = items.slice(start, end);

    itemsToLoad.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cards__card';
        // itemDiv.innerHTML = `<img src="${item.img}" alt="${item.text}"><p>${item.text}</p>`;
        itemDiv.innerHTML = ` 
                    <h3 class="cards__card-header">${item.headerTxt}</h3>
                    <div class="cards__card-content">
                        <img class="cards__card-content__imag" src="${item.img}" alt="Эвакуатор">
                        <div class="cards__card-content__rows">
                            <div class="cards__card-content__row">
                                <p class="cards__card-content__row-txt">${item.rowTxt1}</p>
                                <p class="cards__card-content__rows-price">${item.rowsPrice1}</p>
                            </div>
                            <div class="cards__card-content__row">
                                <p class="cards__card-content__row-txt">${item.rowTxt2}</p>
                                <p class="cards__card-content__rows-price">${item.rowsPrice2}</p>
                            </div>
                            <div class="cards__card-content__row">
                                <p class="cards__card-content__row-txt">${item.rowTxt3}</p>
                                <p class="cards__card-content__rows-price">${item.rowsPrice3}</p>
                            </div>
                            <div class="cards__card-content__row">
                                <p class="cards__card-content__row-txt">${item.rowTxt4}</p>
                                <p class="cards__card-content__rows-price">${item.rowsPrice4}</p>
                            </div>
                            <div class="cards__card-content__row">
                                <p class="cards__card-content__row-txt">${item.rowTxt5}</p>
                                <p class="cards__card-content__rows-price">${item.rowsPrice5}</p>
                            </div>
                        </div>
                        <div class="cards__card-content__buttons">
                            <button class="btn cards__card-content__button">
                                <img src="images/icons/phone.svg" alt="телефон">
                                ${item.telMob}
                            </button>
                            <button class="btn cards__card-content__button">
                                <img src="images/icons/phoneCity.svg" alt="телефон">
                            ${item.telCity}
                            </button>
                            <div class="cards__card-content__info">
                                <div class="cards__card-content__header">
                                    <img src="images/icons/label.svg" alt="локация">
                                    <p>Место стоянки</p>
                                </div>
                                <p class="cards__card-content__descr">${item.address}</p>
                            </div>
                            <div class="btn-border cards__card-content__button-call">
                                <p>ID объявления <span id="${item.id}">${item.id}</span></p>
                                <a href="advertise.html">Заказать рекламу</a>
                            </div>
                        </div>
                    </div>
                    <p class="cards__card-slogan">Эвакуатор авто. Всегда на связи! Быстро и надежно</p>
                `;
        content.appendChild(itemDiv);
    });
}

// Обработчик кнопок пагинации
pageButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index < 4) { // Если это числа от 1 до 4
            currentPage = index + 1;
        } else { // Если это кнопка "Далее"
            if (currentPage < totalPages) {
                currentPage++;
            }
        }
        loadItems(currentPage);
        updateButtons();
    });
});

// Обновление состояния кнопок
function updateButtons() {
    pageButtons.forEach((button, index) => {
        if (index < 3) { // Только первые четыре кнопки
            button.style.display = (index + 1 <= totalPages) ? 'inline-block' : 'none';
            button.classList.toggle('active', index + 1 === currentPage);
        }
    });
}

loadItems(currentPage);
updateButtons();






