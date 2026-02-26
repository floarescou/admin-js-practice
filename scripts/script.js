"use strict";
// Получить кнопку "Открыть магазин" через id
const openBtn = document.getElementById("open-btn");

// Получить все поля в левом меню через классы
const shopNameField = document.getElementsByClassName("name-value");
const shopBudgetField = document.getElementsByClassName("budget-value");
const productsCategoriesField = document.getElementsByClassName("goods-value");
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

// Стилизовать магазин на свой вкус. Классы и id трогать нельзя
// === сделано ===
