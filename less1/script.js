// ===================================ОСНОВЫ===================================
// -------- вывод в консоль--------
// console.log('hello world!!!');


// --------01 переменные--------
// let userName = 'Саша';
// console.log(userName);


// --------02 типы переменных--------                let   const   var старый формат объявления переменных


// let может менять значение во время работы программы
// let userName = 'Саша';
// console.log(userName);

// userName = 'Марк';
// console.log(userName);

// ======пример======
// let name,age;
// name = 'Alex';
// age = 19;
// console.log(name,age)

// const не может менять значение во время работы программы
// const yearOfBirdh = 2005;
// yearOfBirdh = 2010; //ОШИБКА!!! не может менять значение 
// console.log(yearOfBirdh);

// var    старый формат объявления переменных
// в отличии от let и const имеет функциональную область видимости, а не блочную
// не рекомендуется к использованию 
// может менять значение на протяжении работы программы
// var city = 'Москва';
// city = 'Киев';
// city = 'Минск';
// console.log(city);

// --------03 область видимости--------
// функциональный область  видимости
// function sum(){
//     var userName = 'Alex';
   
// }
// sum()
//  console.log(userName);


// область видимости внутри блока кода
// {
//     let userName = 'Bob';
//     console.log(userName);
// }


// --------04 типы данных-------- 
//  1)   let userName = 'Марк'; //это строка (текст), (одно слово, фраза, предложение, абзац, хоть целая книга.)
//  2)   let age = 17;    // число 
//  3)   let isM.arried = false;  // логичесское значение true/false
//       let isMarried = true;


// диномичесская типизация
// let someVariable = 'Some value'; // сейчас someVariable типа -String-
// someVariable = 10; // сейчас someVariable типа -Number-
// someVariable = true; //сейчас someVariable типа -Boolean-


// плохой пример нейминга
// let o = 'Saimon';
// console.log(o);


// хороший пример нейминга
// let userName = 'Saimon';
// console.log(userName);


// значение null
// озночает значение <<ничего>>, <<пусто>> или  <<значение неизвестно>>.
// let age = 32;
// age = null;

//значение undefined
//озночает что значение не было прмсвоенно
//если переменная объявлена, но ей не присвоенно никокого значения, то её значение будет underfind
// let userName;
// console.log(userName); 