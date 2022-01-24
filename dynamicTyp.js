//преобразовать в строку
console.log(typeof(String(33)));    //string    
console.log(typeof(String(null))); //string

console.log(typeof("строка"));
console.log(typeof(1+"")); //строка, конкатенация, если что то сложить со строкой получается строк

//преобразовать в число
console.log(typeof(+"33"));


//преобразовать в boolean
// все что не 0, "", undefined, null, NaN - является tue. Так же !!"string" тоже true


console.log(typeof(!!"строка")); //boolean

if(!!"строка") {
    console.log("Двойное отрицание строки это true");
}

let x;
console.log(typeof(x));