let objCapital = {
    Gb: 'London',
    USA: 'Washington',
    Rus: 'Moscow',
    republicsRus: {
        capBashk: 'Ufa',
        capTatr: 'Kazan'
    }

};

let jsn = JSON.stringify(objCapital);   // получить из объекта JSON формат
console.log(jsn);

//из JSON формата получть объект  JSON.parse

let objFromJSON = JSON.parse(jsn);
console.log(objFromJSON); 

//с помощью методов parse и stringify создаются глубокие копии объектов

let clone = JSON.parse(JSON.stringify(objCapital));  // сначала получили json формат, а затем из него глубокую копию;