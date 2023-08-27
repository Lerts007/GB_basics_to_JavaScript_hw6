// Задание 1

// Найти по id, используя getElementById, элемент с id равным "super_link" и вывести
// этот элемент в консоль.

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 1");
console.log("--------------------------------------------------------------------");

const supreLink = document.getElementById("super_link");
console.log(supreLink);

// --------------------------------------------------------------------
// Задание 2

// Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте
// текст внутри элемента на "ссылка".

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 2");
console.log("--------------------------------------------------------------------");

const cardLinkAll = document.querySelectorAll(".card-link");
cardLinkAll.forEach((el) => {
  el.textContent = "ссылка";
  console.log(el);
});

// --------------------------------------------------------------------
// Задание 3

// Найти все элементы на странице с классом "card-link", которые лежат в элементе
// с классом "card-body" и вывести полученную коллекцию в консоль.

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 3");
console.log("--------------------------------------------------------------------");

const cardLinkAllInCardBody = document.querySelectorAll(".card-body .card-link");

console.log(cardLinkAllInCardBody);
// --------------------------------------------------------------------
// Задание 4

// Найти первый попавшийся элемент на странице у которого есть атрибут data-number
// со значением 50 и вывести его в консоль.

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 4");
console.log("--------------------------------------------------------------------");

const dataNumber = document.querySelector("[data-number='50']");
console.log(dataNumber);

// --------------------------------------------------------------------
// Задание 5

// Выведите содержимое тега title в консоль.

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 5");
console.log("--------------------------------------------------------------------");

const title = document.querySelector("title");
console.log(title.text);

// --------------------------------------------------------------------
// Задание 6

// Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 6");
console.log("--------------------------------------------------------------------");
// --------------------------------------------------------------------
// Задание 7

// Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег
// в начало элемента, который имеет класс "card".

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 7");
console.log("--------------------------------------------------------------------");
// --------------------------------------------------------------------
// Задание 8

// Удалите тег h6 на странице.

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 8");
console.log("--------------------------------------------------------------------");
// --------------------------------------------------------------------
