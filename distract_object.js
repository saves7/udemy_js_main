//объекты и деструктурирующее присваивание
'use strict';


const options = {
    name: 'test',
    width: 1024,
    length: 1200,
    font: 'arial',
    colors: { bg: 'green', border: 'red'},
    testMethod: function() {
        console.log('Вызван метод testMethod объекта');
    }
};

options.testMethod();
console.log(options.name);
//console.log(options['colors']['bg']); для получения вложенных свойств используйте деструктуризацию:
const {border, bg} = options.colors;
console.log(border);
for (let keys in options) {
    console.log(`Свойство ${keys} имеет значение ${options[keys]}`);
}

//для подсчета количества свойств объекта, используется встроенный метод 
console.log(Object.keys(options));
//так мы получили массив свойств, а чтобы узнать длину пишем lenght для массива
console.log(Object.keys(options).length);

//delete options.name;

//ООП введение
//В ООП все воспринимается как объект с методами и свойствами
//Если у простой строки вызвать метод, то она становится уже объектом
let str = 'Это просто строка';
console.log(str.toUpperCase); // строка превратилось объект

//Явно мы сами можем создать строку в виде объекта

let strObj = new String(str);  
console.log(typeof(strObj));

console.dir([0,5,12]); //увидим в коснсоли массив, что он создан от proto_Array и поэтому у него все свойства proto_Array,
// в том чилсе что он создан от proto.Object, у которого есть свойства toString, constructor и другие

const soldier = {
    health: 100,
    arm: 50,
};

const john = {
    health: 90,
};

//Установим связь отдельного экземпляра с портотипом.
//Устаревшая запись:
john.__proto__ = soldier;
console.log(john.arm);  // у jhon есть свойтва soldier