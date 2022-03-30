/* const timer = setTimeout (function(){
    console.log('Hello');
},2000);

const timerId2 = setTimeout (function(text){     //setTimeout помещаем в переменную, чтобы различать setTimeout-ы, так как их может быть несколько
    console.log(text);
},2000, 'Hello');                           //3-м параметром функция может принимать аргумент
 */




const btn = document.querySelector('.btn');
let timerId,
    i = 0;   
    
function myAnimation() {
     const elem = document.querySelector('.box');
     let pos = 0;

    const id = setInterval(frame, 15);
    
     function frame() {
         if (pos == 300) {
             clearInterval(id);
         } else {
             pos++;
             elem.style.top = pos + "px";
             elem.style.left = pos + "px";
         }
     }

} 

btn.addEventListener('click', myAnimation);


/* btn.addEventListener('click', () => {
    //const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);

});


//clearInterval(timerId);                    //остановить таймер и выполнение функции можно с помощью clearInterval 

function logger () {
    if (i===3) {
        clearInterval(timerId);
    }
    console.log('Text'); 
    i++;
}

let id = setTimeout(function log(){
    console.log('Hello');
    id = setTimeout(log, 500);


}, 500); */

