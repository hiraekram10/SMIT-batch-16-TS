// let a = false  // implicit
// a = true 
// let num:number  = 10  //explicit
// let hello:number;
// hello = 0 
// console.log(hello)
var add = function (c, d) {
    var dnum = Number(d);
    return c + dnum;
};
var ret = add(10, "20");
console.log(ret);
