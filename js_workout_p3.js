alert("Скрипт работает");

let movieDataBase ={
    userName: "",
    countMovie: 0,
    movieRang: [],
    countInput: function(){
        movieDataBase.countMovie = +prompt("Введите количество просмотренных фильмов");
    },
    movieRangInput: function(){
        for (let i=0; i<3;i++){
            let film = prompt("Введите фильм");
            let rang = +prompt("Введите рейтинг фильма");
            movieDataBase.movieRang[film]=rang;
        }
    },

};



movieDataBase.userName = "Anton";
movieDataBase.movieRangInput();
movieDataBase.countInput();
console.log(movieDataBase.userName);
console.log(movieDataBase);
