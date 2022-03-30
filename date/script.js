
//const now = new Date();


//можем передать дату в виде стороки, например получить из input html
/* const now = new Date ('2022-02-07');
console.log(now);  //2022-02-07T00:00:00.000, 0 так как не указали время */

/* const now = new Date (2022,02,07,20); 
console.log(now); //2022-03-07T15:00:00.000Z */


//дата хранится в милисекундах, отсчет от 1970 года

/* const now = new Date(0);
console.log(now); //1970-01-01T00:00:00.000Z */


//даты до 1970 года будут со знаком минус
/* const now = new Date(-9999900000);
console.log(now); //1969-09-07T06:15:00.000Z */

//получение компонентов даты
/* const now = new Date ();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());  // день месяца
console.log(now.getDay());  // день недели
console.log(now.getHours());
console.log(now.getUTCHours()); //добавив UTC получаем значение по мировому времени UT (если не брать дробные секунды то будет отклоение от Гринвича)
console.log(now.getMinutes()); */

//получить разницу между UT мировым временем (если не брать дробные секунды то будет отклоение от Гринвича) и текущем временем
/* const now = new Date (); */
/* console.log(now.getTimezoneOffset()); //-300 минут разница между Гринвичем */
/* console.log(now.getTime());  //1644670105386 колличество миллисекунд с 1970г
 */

//Установить дату  set

const now = new Date ();
console.log(now.setFullYear(2070));
console.log(now.setMonth(7));
console.log(now.setDate(1));  // день месяца
console.log(now.setHours(7)); 
console.log(now);
//но в консоле будут выводится данные UTC, а в браузере дата будет в текущем времени

const nowDate = new Date('2022-02-12');
//аналогично записи
//const nowDate2 = new Date.parse('2022-02-12');
//console.log(`${nowDate} идентично Date полученной через Date.parse ${nowDate2} `);

//вычислить длительность операции
let start = new Date();
for (let i=0; i<100000; i++) {
    let some = i**9;
}
let end = new Date();   
console.log (`Цикл отработал за ${end - start} миллисекунд`);









