let arr = [1, 4, 8, 12, 16];
let i=0;
for(let val of arr) {
    console.log(i,val);
    i++;
}

arr.forEach(function(item, i, arr){
    console.log(i, item, arr);
});