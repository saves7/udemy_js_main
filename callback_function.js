function first() {
    setTimeout(function(){
        console.log(1);
    },500);
}

function second() {
    console.log(2);
}

first();
second();

//callback функция - это функция, которая выполняется после выполнения другой функции.
//в одну функцию в качестве аргумента передается другая функция, что обеспечивает выполнение функций в котролируемом порядке

function learnLang (lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done () {
    console.log('Я изучил этот урок');
}

learnLang ('Javascript', done);


/*learnLang ('Javascript', function(){
    console.log('Я прошел этот урок');  
});*/