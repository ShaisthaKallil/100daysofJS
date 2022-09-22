/*::::::::::::::::::COLLATZ CONJECTURE:::::::::::::::::::::::::*/
/////////////////////////////////////////////////////////////////

/*The Collatz Conjecture or 3x+1 problem can be summarized as follows:

Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

Given a number n, return the number of steps required to reach 1.

Examples
Starting with n = 12, the steps would be as follows:

12
6
3
10
5
16
8
4
2
1
Resulting in 9 steps. So for input n = 12, the return value would be 9.

If n is not a positive integer, stop the program from being executed further and return an error message.

In JavaScript, this can be done using the throw statement.

throw new Error('Only positive numbers are allowed');*/


function collatzConj(n) {
  var count = 0;

  if (n === 1)  return count;

  if (n < 0)  throw new Error('Only positive numbers are allowed');

  while (n != 1) {
   n = n%2 == 0? n/2: (3*n) +1;

   /* if (n % 2 == 0) {
      n = n / 2;
    } else if (n % 2 != 0) {
      n = (3 * n) + 1;
    }*/

    count++;

}
  return count;
}

console.log(collatzConj(12));
