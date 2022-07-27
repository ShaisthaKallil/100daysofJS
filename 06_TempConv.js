//Temperature Conversion Celcius to Farenheit
//Create function with arg float in Farenheit
//Return Celcius float values
//Farenheit to Celcius
function tempconvcel(farenheit){

	let celcius = 0;

  celcius = (farenheit - 32)*5/9;

  return celcius.toFixed(2);

}

//Celcius to Farenheit

function tempconvfar (celcius){

    let faren = 0;

    faren = celcius * (9/5) + 32;

    return faren.toFixed(2);
}

console.log("Celcius:" + tempconvcel(80));

console.log("Farenheit:" +tempconvfar(60));
