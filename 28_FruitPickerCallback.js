/*:::::::::::::::: FRUIT PICKER CALLBACKS ::::::::::::::::::::*/
/////////////////////////////////////////////////////////////


//Callback functions are functions passed as arguments to other functions. The callback function may then be invoked to trigger a subsequent action. Often, callbacks are used to handle the results of work done, or handle an action when an event occurs.

//You are creating a new online portal for your patrons to order their fruit fresh from the grocer. The grocer has an API that you can use to see if they have the inventory desired by your customers. You need to create a small library of functions for interacting with the grocer's API.



const query = {
  variety: string,
  quantity: number,
};

//CREATE A CALLBACK TO BE CALLED WHEN THE ORDER IS SUCCESSFUL

function onSuccess(){
  let message = {message: 'SUCCESS'};
	return notify(message);
}
function notify(mes){
	return mes;
}

//CREATE A CALLBACK TO BE CALLED WHEN ORDER FAILS WITH AN ERROR
function onError(){
  let error = {message: 'ERROR'};
	return notify(error);
}
function notify(mes){
	return mes;
}

//CREATE A WRAPPER TO WRAP THE EXTERNAL API FUNCTION
function orderFromGrocer(query, onSuccessCallback, onErrorCallback){
// order is considered an imported function
    return order(query, onSuccessCallback, onErrorCallback);
}


//Create a convenient short function

function postorder(variety,quantity){
  orderfromGrocer({ variety, quantity }, onSuccess, onError);
}
console.log(onSuccess(notify));
// => `notify` called with `{ message: 'SUCCESS' }`

console.log(onError(notify));
// => `notify` called with `{ message: 'ERROR' }`

console.log(orderFromGrocer(
  { variety: 'pear', quantity: 12 },
  exampleSuccessCallback,
  exampleErrorCallback
));
// => `order` was called with the query and the callbacks

postOrder('peach', 100);
// => order submitted for 100 peaches
