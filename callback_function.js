function first() {
    setTimeout(function(){
        console.log(1);
    },500)
}

function second() {
    console.log(2);
}

first();
second();

//callback функция - это функция, которая выполняется после выполнения другой функции.
