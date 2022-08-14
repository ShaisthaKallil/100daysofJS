//Cost calculations
//Calculate day rate based on hourly rate . Words 8hr/day
function dayRate(hrrate){

  return hrrate*8;
}
//Number of workdays given a fixed budget
function daysInBudget(budget, hrrate){

  return Math.round(budget/(hrrate*8));
}
//Calculate discounted rate for large projects, 22 billable days month
//Discount provided for every full month
function priceWithMonthlyDiscount(hrrate, projdays, discount){

let monthpricenodisc = hrrate*8*22;//15664
let discpricepermonth = monthpricenodisc * 0.42;//6578.88
//will receive discount rate for 10 full months
let numfullmonths = Math.round(projdays/22);
let totalDiscprice = discpricepermonth * numfullmonths;
let paywithdisc = (monthpricenodisc * numfullmonths)- totalDiscprice;
let fullpaydays = projdays - (numfullmonths*22);
let fullpay = fullpaydays * hrrate * 8;
let custpay = paywithdisc + fullpay;

 return Math.round(custpay);
}

//console.log(dayRate(89));

//console.log(daysInBudget(20000,89));

console.log(priceWithMonthlyDiscount(89, 230, 0.42));
