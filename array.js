const arr = [6,12,8,26,112];

console.log(arr[1]);

//методы массива 
//arr.pop - удаляет последний элемент
//arr.shift(); удаляет первый эл-т и возвращает его
//arr.unshift('a'); добавляет первый эл-т, этими методами редко пользуются так как меняется нумерация массива
//arr.push(value) - добавляет элемент в конец массива

arr.push(10); 
console.log(arr);

//простой способ переборки массива через цикл for

for (let i=0; i<arr.length; i++) {
    console.log(`Значение элемента ${i} = ${arr[i]}`);
}

// так же доступна переборка массива через for of
// в переборке с помощью for of доступны break и continue

for (let value of arr) {
    console.log(value);
    if (value == 6) {break;}
}

//в переборке с помощью forEach не доступны break и continue, но очень удобна,
//в for each используется функция обратного вызова, т.е функция вызывается при обращении к элементу
//1-й аргумент функции это элемент массива, 2-й аргумент порядковый номер, 3-й сам массив

arr.forEach(function(item){
    console.log(item);
});

arr.forEach(function(item, i){
    console.log(`Элемент ${i} имеет значение ${item}`);
});

arr.forEach(function(item, i, arr){
    console.log(`Элемент ${i} имеет значение ${item} в массиве ${arr}`);
});

// так же есть переборка массива с трансформацией, это такие методы
//arr.map  arr.filter   arr.reduce  arr.every/some

//у массива также есть методы

//arr.split(s) - превращает строку в массив, s - разделитель
//arr.join(s) - превращает массив в строку, s - разделитель
//arr.sort(fn) - сортирует массив, если не передать функцию сравнения, то сортирует элементы как строки
//arr.slice(begin, end);
//arr.reverse();
//arr.concat(item1...);

function compareNumber(a, b) {
    return a - b;
}

arr.sort(compareNumber); // было 6,12,8,26,112 стало 6, 8, 12, 26, 112
console.log(arr);