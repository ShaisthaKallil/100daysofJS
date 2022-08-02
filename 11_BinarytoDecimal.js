
//Convert binary value to corresponding decimal value
//110111   55
//101011   43
//10100    20


var binary_decimal = function(bin){

let value = 0;
let count = bin.length;
let iter = bin.length;

for(let i = bin.length-1; i>=0; i--){

	 value += bin[i] * Math.pow(2,count-iter);
   iter--;
}
return value;

}


console.log(binary_decimal([1,0,1,0,0]));
