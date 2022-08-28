//::::::::::::::::::::::FACTORY SENSOR:::::::::::::::::::::::://
////////////////////////////////////////////////////////////////

//:::::TASK
//Elena is the new quality manager of a newspaper factory. As she has just arrived in the company, she has decided to review some of the processes in the factory to see what could be improved. She found out that technicians are doing a lot of quality checks by hand. She sees there is a good opportunity for automation and asks you, a freelance developer, to develop a piece of software to monitor some of the machines.

//MONITOR THE HUMIDITY LEVEL OF  PRODUCTION ROOM
/**
: Has the data of humidity taken periodically. Throw error if humidity is too :high. if humdity > 70%;
:
:@param {number} currentHum in percentage
:
:@return  {boolean} true/false
*/
function checkHumidityLevel(currentHum) {

  //const error = new Error('Humidity too high!!!')

  if (currentHum >= 70) {
    try {
      throw new Error("ERROR!!!");
    } catch (error) {
      return error.message;
    }
  }

}

//DETECT OVERHEATING
/**
: Threshold temp 500 deg C if above overheating risk/ sensor break => Error
: Reach differently depending on the error - throw instances of different
: error classes.  use extends
:@param {number}  tempMach
*/
class ArgumentError extends Error {

}
class OverheatingError extends Error {
  constructor(tempMach) {
    super('The temperature is ${tempMach} Overheating!!');
    this.temp = tempMach;
  }

}


function reportOverheating(tempMach) {

  if (tempMach === null) {
    //since ArgumentError has no methods.. everything will be
    //inherited from Error parent. Here this message will be
    //instantiated using the methods in Error


    throw new ArgumentError();

  }


  if (tempMach >= 500) {

    throw new OverheatingError(tempMach);


  }
}

//If the sensor is broken, you need to warn a technician
//If the temperature is too high, you will either shut down the machine if the temperature exceeds 600°C or turn on a warning light if it is less than that.
//If another error happens, you'll rethrow it.

//Implements a function monitorTheMachine that takes an argument actions.

//actions is an object that has 4 properties :

//check is a function that, when called, checks the temperature of the machine. It may throw various errors

//alertDeadSensor is a function that, when called, alerts a technician that the temperature's sensor is dead.

//alertOverheating is a function that, when called, will turn on a warning light on the machine.

//shutdown is a function that, when called, will turn off the machine.

//::The monitorTheMachine function should call check(). If it passes, the function should not return anything. However, it may throw an error. When this happens, you should, depending on the error:

//ArgumentError: when this happens, call the alertDeadSensor function.
//OverheatingError: when this happens, if the temperature is less than 600 °C, call the alertOverheating function to turn on the warning light. If the temperature exceeds 600°C, the situation is critical, call the shutdown function.
//anything else: when this happens, rethrow the error

function monitorTheMachine({
  check,
  alertDeadSensor,
  alertOverheating,
  shutdown,
}){
  try{
  	check();
  }catch(error){
    if (error instanceof ArgumentError) {
      alertDeadSensor();
    } else if (error instanceof OverheatingError) {
      if (error.temperature < 600) {
        alertOverheating()
      } else {
        shutdown()
      }
    } else {
      throw error;
    }
  }





}


console.log(checkHumidityLevel(60));
// => undefined
console.log(checkHumidityLevel(100));
// Throws an error

//console.log(reportOverheating(null));
// Throws an ArgumentError
//console.log(reportOverheating(800));
// Throws an OverheatingError

console.log(monitorTheMachine({
  check,
  alertDeadSensor,
  alertOverheating,
  shutdown,
}));

//::::NOTES on ERRORS
//Errors - javascript object; property - messsage
// Create a new error obj new Error('message')
//Throw an error throw new Error('message') what happens after is current execution stops and resumes in the first catch block of a call stack
//throw allows to throw obj, string, null, any other primitive
//try{throw...}catch(decl var mess){console.log()}
//Extend used to create customized errors class custError extends Error{}
//instanceOf checks whether caught error is an instance of subclass of Error
//try{ throw..}catch(decl var mess){if(decl var mess instanceOf custError){console.log()}}
//Other than Error obj there are other built in error obj

//::::NOTES on INHERITANCE
//Inheritance creates parent(superclass) child(subclass) relationship between classes
//data defined by the parent class (sometimes referred to as a superclass).

/*class Pet {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`This is my pet, ${this.name}.`);
  }
}

class Dog extends Pet {}

const dog = new Dog('Otis');
dog.introduce();
// => This is my pet, Otis.*/

//CONSTRUCTOR - notice Dog is child of Pet. Dog uses constructor function from parent Pet since one is not defined for child Dog . Otherwise if a constructor was defined for Dog child, to call the parent Pet constructor it would have to use 'super' keyword
//Parent Pet is responsible for initializing the object. so it should be called first before child Dog can use 'this' else Error
//class Pet remains same
/*class Dog extends Pet {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const dog = new Dog('Otis', 'Pug');*/
//OVERIDING METHODS INHERITED FROM THE PARENT CLASS
//A child class can also override the behavior of a method defined by the parent and replace or extend it with behavior defined by the child class.
//Below are methods to be used inside Dog Child
/*  describe() {
    console.log(`${this.name} is a ${this.breed}.`);
  }

  // extending parent class behavior
  introduce() {
    super.introduce();  //function from parent class
    this.describe();    //function withing child class
  }*/
