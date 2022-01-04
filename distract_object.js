//объекты и деструктуирующее присваиванеие
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

//для подсчета колличества свойств объекта, используется встроенный метод 
console.log(Object.keys(options));
//так мы получили массив свойств, а чтобы узнать длину пишем lenght для массива
console.log(Object.keys(options).length);