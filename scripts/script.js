"use strict";
// Получить кнопку "Открыть магазин" через id
const openBtn = document.getElementById("open-btn");

// Получить все поля в левом меню через классы
let shopNameField = document.getElementsByClassName("name-value");
let shopBudgetField = document.getElementsByClassName("budget-value");
let productsCategoriesField = document.getElementsByClassName("goods-value");
const productsNamesField = document.getElementsByClassName("items-value");
const currentEmployeesField = document.getElementsByClassName("employers-value");
const discountField = document.getElementsByClassName("discount-value");
const openStatusField = document.getElementsByClassName("isopen-value");

// Получить поля категории товаров через класс
const goodsCategoriesInputs = document.getElementsByClassName("goods-item");

// Получить все 3 кнопки через Tag
const mainFuncBtns = document.getElementsByTagName('button');

// Получить поля ввода товаров, времени и расчета бюджета через querySelector
const productsInput = document.querySelector("#items");
const workTimeInput = document.querySelector("#time");
const budgetInput = document.querySelector("#budget");

// Получить поля имен сотрудников через querySelectorAll
const EmployeesInputs = document.querySelectorAll(".hire-employers-item");

// Получить блок с инпутами (справа)
let mainFuncBlock = document.getElementById('main-functions');

// Стилизовать магазин на свой вкус. Классы и id трогать нельзя
// <!- сделано -!>

// запрет на взаимодействие с блоком инпутов (справа) до нажатия кнопки 'открыть'
mainFuncBlock.style.pointerEvents = 'none';

//при нажатии кнопки 'открыть' появляются prompt-окна с запросами названия магазина, бюджета на месяц и цены товара
openBtn.addEventListener('click', () => {
    // название магазина
    let userShopName = prompt("Укажите название вашего магазина", "");
    while (userShopName === '' || userShopName === null) {
        userShopName = prompt("Укажите название вашего магазина", "");
    }
    shopNameField[0].innerText = userShopName.toLocaleUpperCase();

    // бюджет на месяц
    let userBudget = prompt("Укажите ваш бюджет на месяц", "");
    while (isNaN(userBudget) || userBudget === '' || userBudget == null) {
        userBudget = prompt("Укажите ваш бюджет на месяц", "");
    }
    shopBudgetField[0].innerText = userBudget;

    // цена товара (если цена выше указанной суммы - применятся скидка)
    let userPrice = prompt("Укажите стоимость товара (скидка от 1400)", "");
    while (isNaN(userPrice) || userPrice === '' || userPrice == null) {
        userPrice = prompt("Укажите стоимость товара (скидка от 1400)", "");
    }

    if (Number(userPrice) >= 1400) {
        let discount = Number(userPrice) - (Number(userPrice) * 0.2);
        discountField[0].innerText = `Цена со скидкой: ${Math.trunc(discount * 100) / 100}`;
        discountField[0].style.backgroundColor = "#343723";
    } else {
        discountField[0].innerText = `Цена: ${Number(userPrice)}`;
        discountField[0].style.backgroundColor = "#7D2826";
    }

    // разблокировка правого блока
    mainFuncBlock.style.pointerEvents = 'auto';
});

// при нажатии кнопки утвердить, значения из инпутов попадают в поле 'категории товаров',
// если все инпуты пустые, фоновый цвет инпутов становится красным
mainFuncBtns[1].addEventListener('click', () => {
    let arr = [];
    for (let i = 0; i < goodsCategoriesInputs.length; i++) {
        if (goodsCategoriesInputs[i].value !== '' && goodsCategoriesInputs[i] !== null) {
            arr.push(goodsCategoriesInputs[i].value);
            goodsCategoriesInputs[i].style.backgroundColor = "#EFE9D7";
            goodsCategoriesInputs[i].style.color = "#222513";
        } else {
            goodsCategoriesInputs[i].style.backgroundColor = "#7D2826";
            goodsCategoriesInputs[i].style.color = "#EFE9D7";
        }
        productsCategoriesField[0].innerText = arr.join(", ");
    }
});

// при изменении значения в  инпуте 'Введите продукты через запятую', значение попадает в поле 'Наименования товаров'
// по алфавиту
productsInput.addEventListener('change', () => {
    let productsArray = [];
    let items = productsInput.value;

    if (isNaN(items) || items !== "") {
        productsArray = items.split(", ");
        productsArray.sort();

        productsNamesField[0].textContent = productsArray;
    }
});

// при введении значения в инпут 'укажите время' в поле 'открыто' появляется соответствующее значение
workTimeInput.addEventListener('change', () => {
    let time = workTimeInput.value;

    if (time < 0 || time === "") {
        openStatusField[0].innerText = "Такого не может быть!";
        openStatusField[0].style.backgroundColor = "#7D2826";
    } else if (time >= 0 && time < 8) {
        openStatusField[0].innerText = "Еще рано";
        openStatusField[0].style.backgroundColor = "#7D2826";
    } else if (time >= 8 && time < 20) {
        openStatusField[0].innerText = "Время работать";
        openStatusField[0].style.backgroundColor = "#343723";
    } else if (time >= 20 && time <= 24) {
        openStatusField[0].innerText = "Уже слишком поздно";
        openStatusField[0].style.backgroundColor = "#7D2826";
    } else {
        openStatusField[0].innerText = "В сутках только 24 часа";
        openStatusField[0].style.backgroundColor = "#7D2826";
    }
});

// при нажатии кнопки 'рассчитать', в инпуте появляется сумма бюджета на день, рассчитанная из значения поля 'бюджет магазина',
// деленного на 30 (дней)
mainFuncBtns[2].addEventListener('click', () => {
    let dayBudget = Number(shopBudgetField[0].innerText) / 30;
    budgetInput.value = Math.trunc(dayBudget * 100) / 100;
});

// при нажатии на кнопку 'подтвердить' значения инпутов 'имена сотрудников' попадают в поле 'сотрудники'
mainFuncBtns[3].addEventListener('click', () => {
    let employeesArray = [];
    for (let i = 0; i < EmployeesInputs.length; i++) {
        if (EmployeesInputs[i].value !== '' && EmployeesInputs[i] !== null) {
            employeesArray.push(EmployeesInputs[i].value);
            EmployeesInputs[i].style.backgroundColor = "#EFE9D7";
            EmployeesInputs[i].style.color = "#222513";
        } else {
            EmployeesInputs[i].style.backgroundColor = "#7D2826";
            EmployeesInputs[i].style.color = "#EFE9D7";
        }
        currentEmployeesField[0].innerText = employeesArray.join(", ");
    }
});

