//Program that manages visitors and tickets
//Topics covered : undefined, null
//1. Create a new visitor
//2. Function to revoke a ticket
//3. Ticket tracking system prevent forgery
//4. Adapt system to new legal requirements

//Create a new visitor - register name, age, terms agreement, Each ticket wi//ll have an Identifier. Ex, H32AZ123

//The function should return an object that holds this information. The keys //in the object should be called name, age and ticketId.
function createVisitor(name, age, ticketId) {
  //Object values are written as name : value pairs (name and value separate   //by a colon)
  let visitor = {
    name: name,
    age: age,
    ticketId: ticketId
  }
  return visitor;

}

//REVOKE THE TICKET - after visitors leave only ticket nulled, data saved
//the function revokeTicket that accepts a visitor object, sets the ticke//identifier to null and returns the object afterwards.
function revokeTicket(visitor){
   //assignment
   visitor.ticketId = null;
   return visitor;
}

//DETERMINE THE TICKET STATUS - @param ticketId, object
function ticketStatus(tickets, ticketId){
	if(!tickets.hasOwnProperty(ticketId)){
  	return "unknown ticket id";
  }
  //name[property] to access the value
  if (tickets[ticketId] === null){
  	return "not sold";
  }
  	return "sold to " + tickets[ticketId];

}

//IMPROVE THE TICKET STATUS RESPONSE - visitor name or invalid ticket
function simpleTicketStatus(tickets, ticketId){
		if(!tickets.hasOwnProperty(ticketId) || tickets[ticketId] === null){
  	return "invalid tickets!!!";
  	}
    //name[property] to access the value

  	return tickets[ticketId];
}

//DETERMINE THE VERSION OF TERMS & CONDITIONS
function gtcVersion(visitorterm){
	if(visitorterm['gtc'] != undefined){
  	return visitorterm['gtc']['version'];
  }else{
  	return undefined;
  }

}

// @param name, age, ticketId
const visitor = createVisitor('Verena Nardi', 45, 'H32AZ123');
//==> name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' }

const tickets = {
  '0H2AZ123': null,
  '23LA9T41': 'Verena Nardi'
};

const visitorNew = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
  gtc: {
    signed: true,
    version: '2.1',
  },
};


const visitorOld = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
};


console.log(revokeTicket(visitor));
// => { name: 'Verena Nardi', age: 45, ticketId: null }

console.log(ticketStatus(tickets, 'RE90VAW7'));
// => 'unknown ticket id'

console.log(ticketStatus(tickets, '0H2AZ123'));
// => 'not sold'

console.log(ticketStatus(tickets, '23LA9T41'));
// => 'sold to Verena Nardi'

console.log(simpleTicketStatus(tickets, '23LA9T41'));
// => 'Verena Nardi'

console.log(simpleTicketStatus(tickets, '0H2AZ123'));
// => 'invalid ticket !!!'

console.log(simpleTicketStatus(tickets, 'RE90VAW7'));
// => 'invalid ticket !!!'

console.log(gtcVersion(visitorNew));
// => '2.1'

console.log(gtcVersion(visitorOld));
// => undefined
