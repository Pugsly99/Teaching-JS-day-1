// THOMAS DAY 1

// Varibles

let numbers = 1;

let string = 'string';

let booleans = true; //or false

let array = [];

let object = {};

// Methods

let stringLenght = string.length;

console.log(stringLenght);
console.log(string);

// Functions
function add(param1, param2) {
	return;
}

// Addition
function add(num1, num2) {
	let addAmount = num1 + num2;

	return addAmount;
}

let catAge = 10;
let dogAge = 15;

let amountAge = add(catAge, dogAge);
console.log(amountAge);

// Subtraction

function subtract(num1, num2) {
	let subtractAmount = num1 - num2;

	return subtractAmount;
}

let kidAge = 12;
let adultAge = 45;

let amountYears = subtract(kidAge, adultAge);
console.log(`this is our age subtracted ${amountYears}`);

// lEET CODE PROB 1

let targetProb1 = 9;
let arrayProb1 = [3, 4, 11, 7, 1, 15, 1];

var twoSum = function (nums, target) {
	let total = 0;
	// 7

	for (let i = 0; i < nums.length; i++) {
		let diffrence = target - total;

		if (nums[i] <= target && diffrence >= nums[i]) {
			total += nums[i];
			console.log(`in the if${total}`);
		}
	}

	return total;
};

let answerProb1 = twoSum(arrayProb1, targetProb1);

console.log(answerProb1);
