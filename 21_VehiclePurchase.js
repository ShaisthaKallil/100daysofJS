//Determine if you will need a drivers licence
//for car and truck not for others assume
function needsLicense(vehicle){
  if(vehicle == 'car' || vehicle == 'truck'){
  	return true;
  }else{
  	return false;
  }

}

//Choose between two potential vehicles to buy
//returns the one comes first in dictionary order
function chooseVehicle(veha, vehb){
	let vehicles = [veha,vehb];
  vehicles.sort();
  return vehicles[0];
}

//Calculate an estimation for the price of a used vehicle
function calculateResellPrice(originalPrice, age){
	if(age<3){
  	return originalPrice * 0.80;
  }else if(age>10){
  	return originalPrice * 0.50;
  }else{
    return originalPrice * 0.70;
  }

}

console.log(needsLicense('bike'));

console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'));

console.log(calculateResellPrice(1000, 15));
