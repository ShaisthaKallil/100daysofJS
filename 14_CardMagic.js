// Elyse, magician-to-be, continues her training. She will be given several stacks of cards that
// she needs to perform her tricks. To make things a bit easier, she only uses the cards 1 to 10.
//
// In this exercise, use built-in methods to analyse the contents of an array.

//Find the position of a cards

//const card = 2;

const card = 3;

function getCardPosition(arr){
	return arr.indexOf(card);
}

function doesStackIncludeCard(arr1){
   return arr1.includes(card);
}

function isEachCardEven(arrn){
	for(let i=0;i<arrn.length;i++){
     if(arrn[i]%2 == 0){
        continue;
      }else{
        return false;
      }
 }
 return true;
}

function doesStackIncludeOddCard(arrc){
		for(let i=0;i<arrc.length;i++){
     if(arrc[i]%2 != 0){

          return true;
     }else{
         return false;
     }
     }

}

function getFirstOddCard(arro){
    let holdOdd = [];

    for(let k = 0; k<arro.length; k++){
        if(arro[k]%2 != 0){
            holdOdd.push(arro[k]);

         }

    }
  return holdOdd[0];
}

function getFirstEvenCardPosition(arre){
    let holdEven = [];

    for(let j = 0; j<arre.length; j++){
        if(arre[j]%2 == 0){
            holdEven.push(j);

         }

    }
  return holdEven[0];
}
//**returs 3
//console.log(getCardPosition([9,7,3,2]));

//**Determine if a card is present boolean

//**return true
//console.log(doesStackIncludeCard([2,3,4,5]));

//**Determine if each and every card is even boolean

//console.log(isEachCardEven([2,4,6,8]));

//**Check if the stack contain odd value card

//console.log(doesStackIncludeOddCard([3,2,6,4,8]));

//**Get First Odd Card from stack
//console.log(getFirstOddCard([4,2,8,7,9]));

//**Determine the position of first card that is even
console.log(getFirstEvenCardPosition([5,2,3,1]));
