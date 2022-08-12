
//Check if the 'Fast Attack' action is possible
//This can only be done if the knight is sleepgin

function canExecuteFastAttack(knightisawake){
if(knightisawake != true){
return true;
}else{
return false;
}

}

//Check if the 'Spy' action is possible
//To be true atleast one of them must be awake
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake){
	if(knightIsAwake == true || archerIsAwake == true || prisonerIsAwake ==true){
  return true;
  }else{
    return false;
  }
}

//Check if the 'Signal Prisoner' action is possible
function canSignalPrisoner(archerIsAwake, prisonerIsAwake){
if(prisonerIsAwake){
   if(archerIsAwake){
     return false;
   }else{
   return true;
   }
   }else{
     return false;
   }
}

//Check if the 'Free Prisoner' action is possible

function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent){
  if(prisonerIsAwake){
    if(archerIsAwake == false && petDogIsPresent == true){
    	return true;
    }else if(archerIsAwake == false && knightIsAwake == false){
    	return true;
    }else{
    	return false;
    }

  }else{
  return false;
  }
}

const knightIsAwake = false;
const archerIsAwake = false;
const prisonerIsAwake = true;
const petDogIsPresent = true;

console.log(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));
//console.log (canSignalPrisoner(archerIsAwake, prisonerIsAwake));

//console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));

//console.log(canExecuteFastAttack(true));
