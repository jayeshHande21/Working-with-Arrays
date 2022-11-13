/*
- There are several array methods in JavaScript.
- We will try to explore all methods which are used in doing this project
- We will go step-by-step through all methods by doing programming.


- First, we get to store all the information which is required for doing the projects.
   such as arrays, objects, etc.*/

// Data

const account1 = {
  owner: "Jayesh Hande",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Kunal Mirgal",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Akshad Jaiswal",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Srushti Deshmukh",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/* 1) Map() 

- If We want to calculate how much has been deposited total in the bank , in all the accounts across in the bank

- First we use map() function to store all array of movements in to single array.Indeed we get the arrays of arrays. */

var bankDepositSum = accounts.map((acc) => acc.movements);
console.log(bankDepositSum);

/* 2) flat()

- Now ho do we gets all of these values out of this array into one single main array.

-  we can use flat() method for this */

var bankDepositSum = accounts.map((acc) => acc.movements).flat();

console.log(bankDepositSum);

/* 3) flatMap()

- We can simplify these functions even further with the help of flaMap() function.

- If we use flatmap() function then there is no need to use map() and flat() function seperately , which help to improvise or code */

var bankDepositSum = accounts.flatMap((acc) => acc.movements);

console.log(bankDepositSum);

/* 3) filter()

- Now we need only positive number to calculate the sum.

- So that we have to filter all array to ignore all negative numbers and put all positive numbers into single array.

- For this we use filter() method */

var bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0);

console.log(bankDepositSum);

/* 4) reduce()

- Now we have an array of only positive number.

- We have to add them all to get the sum for which we have to loop all over the array.

- Looping the array takes a lot of time ad it is not good for practice.

- To avoid that we have reduce() function, which makes our work simple. */

var bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);

console.log(bankDepositSum);

/* 5) find() 

- We used find() method to retrive one element from the array based on the codition.

- find() method return the boolien value which is either true or false.

- It takes a callback function as a input as a filter() method but it does not return the whole arrray as filter method.

- It only return the first value which satisfy the conditions.

*/
//1)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((mov) => mov < 0);

console.log(movements);

console.log(firstWithdrawal); // -400

//2)
const firstDeposite = movements.find((mov) => mov > 0);

console.log(firstDeposite); // 200

//3)
const account = accounts.find((acc) => acc.owner === "Jayesh Hande");

console.log(account); //return the whole object

/* 6) findIndex()

- It is used to find the index of an element in an array.

- It takes a callback() function and return the index accordingly.*/

const index = accounts.findIndex((acc) => acc.owner === "Jayesh Hande");

console.log(index); // 0

/* 7) at()

- It helps to find the element at particular index.*/

const arr = [10, 40, 50, 20];

console.log(arr.at(2)); //50

//getting last array of element

console.log(arr.at(-1)); //20

/* 8) slice()

- Slice() method helps to extract the part of any array but without changing the original array

- It returns the array */

let arrr = ["j", "a", "y", "e", "s", "h"];

console.log(arr.slice(2)); //['y' ,'e', 's', 'h']

// we also able to pass the end parameter in slice() method

console.log(arr.slice(0, 3)); // ['j' , 'a' , 'y']

// getting last array of element.

console.log(arrr.slice(-1)); //['h']

// We can also able to crate shallow copy of an array

console.log(arrr.slice()); // ["j", "a", "y", "e", "s", "h"]

/* 9) splice()

- splice() method works almost the same way as the slice() method but the fundamental difference is that actually change the original array.

- splice() method muated the original array.
*/

let newArr = ["a", "b", "c", "d", "e"];

console.log(newArr.splice(2)); //  ['c' , 'd' , 'e']

console.log(newArr); // ['a' , 'b']

/* 10) reverse()

- This method is used to reverse the whole array.

- It muted the original array. */

let Arr1 = ["a", "b", "c", "d", "e"];

console.log(Arr1.reverse()); // ['e' , 'd' ,'c' , 'b' , 'a']

console.log(Arr1); // ['e' , 'd' ,'c' , 'b' , 'a']

/* 10) concat()

- It merge a two different array into single one 

- It doen't muted a original array
*/

const letters = Arr1.concat(newArr);

console.log(letters);

/* 11) join()

- It used to join array with an spesific charecter or symbol which is passed to there parameter.*/

console.log(letters.join(" - "));
