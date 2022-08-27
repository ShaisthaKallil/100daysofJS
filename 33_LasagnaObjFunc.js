//:::::::::::::::::::::::LASAGNA MASTER:::::::::::::::::::::::::://
//////////////////////////////////////////////////////////////////

//Cook a brilliant lasagna from your favorite cookbook.
//You have five tasks. The first one is related to the cooking itself, the other four are about the perfect preparation.

//Functions (block of code, reusable, perform action)

//DETERMINE WHETHER THE LASAGNA IS DONE
/**
: Status of cooking time from time remaining
:
: @param {number} remainingTime
:
: @return string
*/
function cookingStatus(remainingTime){
  if(remainingTime == undefined){
  	return 'You forgor to set the timer';
  }else{
		return remainingTime > 0 ? "Not done, please wait.": "Cooking is done";
  }
}

//ESTIMATE THE PREPARATION TIME
/**
: Calculate the estimated time to prepare certain layers of lasagna
: Assume each layer takes 2 min.
:
:@param {string[]} layers content
:@param {number}  numLayer
:
:@return {number} prepTime
*/

function preparationTime(layers, numLayer ){
 // same as numLayer == undefined
	//if(!numLayer)

  	return numLayer >= 0 ? layers.length * numLayer: layers.length * 2;
 }

 //COMPUTE AMOUNTS OF NOODLES AND SAUCE NEEDED
 /**
 :
 */
 function quantities(ingredArr){
 	let countNoodles = 0;
  let countSauce = 0;

  for (let item of ingredArr){
  	item === 'sauce'? countSauce++: countSauce;
    item === 'noodles'? countNoodles++: countNoodles;
  }

  return { noodles: countNoodles * 100, sauce: countSauce * 0.2};
 }

 //ADD SECRET INGREDIENT
 /**
 : @param {string[]} friendsList
 : @param {string[]} myList
 */
 function addSecretIngredient(friendsList,myList){
     const newList =  Array.from(new Set([...myList,...friendsList]));
     myList.push(newList[newList.length-1]);

 }

 //SCALE THE RECIPE
 //Implement a function scaleRecipe that takes two parameters.

//A recipe object that holds the amounts needed for 2 portions. The format of the object can be seen in the example below.
//The number of portions you want to cook.
//The function should return a recipe object with the amounts needed for the desired number of portions. You want to keep the original recipe though. This means, in this task the recipe argument should not be modified.
//recipe object quantities are for 2 persons

//@param {object, string : number}

function scaleRecipe(recipe, numOfPerson){
    const set = numOfPerson/2;
    const quanArr = {};

    for(const key in recipe){
      quanArr[key] = recipe[key]*set;
    }

	return quanArr;
}


const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];

const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];

const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

console.log(cookingStatus(0));

console.log(cookingStatus(12));
// => 'Not done, please wait.'

console.log(cookingStatus());
// => 'You forgot to set the timer.'


console.log(preparationTime(layers, 3));
// => 18

console.log(preparationTime(layers));
// => 12

console.log(quantities(layers));
// => { noodles: 100, sauce: 0.4 }


addSecretIngredient(friendsList, myList);
// => undefined

console.log(myList);
// => ['noodles', 'meat', 'sauce', 'mozzarella', 'kampot pepper']



console.log(scaleRecipe(recipe, 4));
// =>
// {
//   noodles: 400,
//   sauce: 1,
//   mozzarella: 2,
//   meat: 200,
// };

console.log(recipe);
// =>
// {
//   noodles: 200,
//   sauce: 0.5,
//   mozzarella: 1,
//   meat: 100,
// };
