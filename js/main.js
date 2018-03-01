var a = 5;
var b = 4;
var sum = a+b;
document.getElementById("show").innerHTML = sum;
function functionone() {
	var a = "Morshed Khan";
	var b = "Rana";
	var result = "His name is" + " " + a + " " +  b;
	document.getElementById("name").innerHTML = result;
}
functionone();

var arr1 = ["Mim","Shamim","Rana","Fahim","Mithila", "Lemon"];
var arr2 = arr1.sort();
document.getElementById("arrshow").innerHTML = arr2;
var num1 = [10, 1020, 30, 10390, 15, 34, 16, 35, 19, 26, 7];
// function numsort1(x, y){
// 	return (x-y);
// }
num1.pop();
var num2 = num1;
document.getElementById("numshow").innerHTML = num2;

