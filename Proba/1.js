var a = 5; //definicija
var b; //deklaracija
//var c;
//var d; hoisting deklaracije promenljivih
console.log("a= "+ a);
console.log("b ="+ b);
b=4;
console.log("b= "+ b);
a = 2;
console.log("a= "+ a);

console.log("c = "+ c);
var c;

console.log("d = "+ d);
var d=12; //d=12; 
console.log("d = "+ d);

console.log(c);

console.log(x);

if (true) {
    var m = 20;
}
console.log(m);
var x = 18;
console.log(x);

console.log(n);
var n;
console.log(n);

(function() {
    var myvar= 'moja vrednost';
    console.log(myvar);
}) ();