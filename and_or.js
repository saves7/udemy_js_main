//И возвращает первое ложное значение, а ИЛИ –  первое истинное.

// Если первый операнд истинный,
// И (&&) возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И (&&) возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
//Можно передать несколько значений подряд. В таком случае возвратится первое «ложное» значение, на котором остановились вычисления.

alert( 1 && 2 && null && 3 ); // null


// ИЛИ ||

let value1, value2, value3;
let result = value1 || value2 || value3;
//Оператор || выполняет следующие действия:
//Вычисляет операнды слева направо.
//Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
//Если все операнды являются ложными (false), возвращает последний из них.

//Цепочка ИЛИ || возвращает первое истинное значение или последнее, если такое значение не найдено.

//Например:

alert( 1 || 0 ); // 1
alert( true || 'no matter what' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)