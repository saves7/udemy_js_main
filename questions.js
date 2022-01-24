//значение x
let x = 5; console.log(x++); //5 так как прибавление будет после вывода;
let t = 5; console.log(++t); //6 так как прибавление будет до вывода;
//значение
console.log([]+false-null+true); // NaN, сначала пустой массив это строка + false = "false"; далее от строки отнимае null и получаем NaN    - правильно NaN
console.log([]+false+null+true); //falsenulltrue, пустой массив это строка, а далее конкатенация

console.log(0&&2); //0  если одно выражение ложь то оно и вернется
console.log(2&&0); //0
console.log(2&&4); //0
console.log(2&&5); //0

let y=1; 
let z = y = 2;  
console.log(z);  // 2 - присвоение идет с права налево

console.log ([]+1+2); //Пустой массив это строка! Ответ 12.
console.log (typeof([]+1+2));  //string

console.log("1"[0]); //1  К каждому элементу строки можно обратится по индексу, эллемент с индексом 0 будет "1";

console.log(!!(1&&2)===(1&&2)); //false так как первое выражение булиновое true, а второе выражение равно 2
console.log(!!(1&&2));
console.log((1&&2));

console.log(2 && 1 && null && 0 && undefined );  //null
console.log(null || 2 && 3 || 4 );  //3, по таблице приоритетов сначала оператор &&, && - запинается на лжи, || запинается на правде

let a = [1, 2, 3], b = [1, 2, 3];
console.log(a===b); //false два разныъ объекта

console.log(+"Infinity" );  //Infinity
console.log(typeof(+"Infinity") );  //number, так как есть унарный плюс

console.log("Ёжик" > "яблоко");  //false, это зависит от юникода
console.log(0 || "" || 2 || undefined || true || falsе );  //2
console.log();  //