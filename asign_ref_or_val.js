 //строка, число и булевой тип всегда передаются по значению, все остальное по ссылке

 let a = 5,
 b = a;

b = b + 1;

console.log(a, b); //5 и 6 переменная a не изменилась


let arr1 = [5, 7, 6, 4];
let arr2 = [];
//arr2[0] = 9;
//console.log(arr1); //[ 9, 7, 6, 4 ] - хоть мы и меняли копию массива мы изменили оригинал,
//так как второй массив получен путем ссылки на первый, то через эту ссылку добрались до оригинала.
//Т.е. создавать копию чего либо кроме строк или чисел нужно не через простое присваивание,
//а через, например циклы перебирающие оригинал и передающее значение в копию объекта,
//или через специальные методы,
//но все это будет поверхностное копирование, не затрагивающее копирование вложенных свойств, которые по прежнему будут копироваться через ссылку.

for (let i = 0; i < arr1.length; i++) {
 arr2[i] = arr1[i];

}
arr2[0] = 9;
console.log(arr1); //[ 5, 7, 6, 4 ] теперь arr1 не меняется хоть и изменили arr2
console.log(arr2); //[ 9, 7, 6, 4 ]

//то же с объектами, передача значение по ссылке

let obj1 = {
 a: 5,
 b: 'какое то свойство',
 c: 2,
};

//let obj2 = obj1; //здесь мы не скопировали, а obj2 присвоили ссылку obj1;
//теперь меняя obj2 мы меняем obj1

//obj2.a = 1;
console.log(obj1); //свойство a стало 1, вместо 5;

//объекты удобно перебирать с помощью for in, и перебирая создавать копию 

function doObjcopy(mainObj) {
 let objCopy = {};
 let key;
 for (key in mainObj) {
     objCopy[key] = mainObj[key];
 }
 return objCopy;
}

let obj2 = doObjcopy(obj1);

obj2['a'] = 77; //изменили obj2, но obj1 не изменился
console.log(obj1); //{ a: 5, b: 'какое то свойство', c: 2 }
console.log(obj2); //{ a: 77, b: 'какое то свойство', c: 2 }

//еще пример, объект со вложенным объектом, который показывает что копирование поверхностное

let nunmbers = {
 a: 5,
 b: 9,
 c: {
     x: 4,
     y: 33,
 }
};

let copyNumbers = doObjcopy(nunmbers);
copyNumbers.a = 7;
copyNumbers.c.x = 77;  // так как копирование поверхностное, то вложенные объекты скопировались по ссылке, и у оригинала то же изменятся.

console.log(nunmbers);      //{ a: 5, b: 9, c: { x: 77, y: 33 } }
console.log(copyNumbers); //{ a: 7, b: 9, c: { x: 77, y: 33 } }

//по мимо переборки свойств и значений одного объекта с подстановкой в другой объект для копирование есть еще способы:
//Object.assign(mainObj, twoObj); Т.е помести в mainObj другой объект twoObj


let enotherNumbers = {
 a1: 4,
 a2: 44,
 a3: 22
};

let joinNumbers = Object.assign(nunmbers, enotherNumbers);
console.log(joinNumbers);


//Object.assign({}, twoObj)Т.е. подставив одним из аргументов пусой объект получим копию другого объекта указанного как аргумент

let enotherNumbers2 = Object.assign({}, enotherNumbers);
console.log(enotherNumbers2);

//Методы поверхностного копирования массивов:
//массивы можно копировать с помощью метода slice: arr.slice([begin[, end]]), если без параметров то скопируется весь массив
let Array1 = [0, 2, 4, 8];
let copyArra1 = Array1.slice();
console.log(copyArra1);

//Еще одним методом можно копировать как объекты так массивы, это spred - развертывание, обозначается . . . 

let testObj = {
 a: '1',
 b: '2',
 c: '3'
};

let copyTestObj = { ...testObj };
console.log(copyTestObj);

//Так же метод . . . - spred можно использовать для передачи параметров:

function log(a, b, c) {
 console.log(a);
 console.log(b);
 console.log(c);
 
}

let num = [1, 3, 5];

log(...num); 