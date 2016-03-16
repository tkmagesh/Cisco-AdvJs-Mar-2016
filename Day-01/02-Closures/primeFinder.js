//create a "primeFinder" function that can find if the give number is a prime number or not.
//The algorithm should not be executed for a given number more than once

var isPrime = (function(){
	var cache = {};
	function checkPrime(n){
		if (n <= 3) return true;
		for(var i=2; i <= (Math.sqrt(n)); i++)
			if (n % i === 0) return false;
		return true;
	}
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n];
	}
})();

isPrime(100) //=> run the algo
isPrime(101) //=> run the algo
isPrime(102) //=> run the algo
isPrime(103) //=> run the algo

isPrime(100) //=> DO NOT run the algo
isPrime(101) //=> DO NOT run the algo
isPrime(102) //=> DO NOT run the algo
isPrime(103) //=> DO NOT run the algo



var isEvenOrOdd = (function(){
	var cache = {};
	function checkOddEven(n){
		console.log('processing ', n);
		return n % 2 === 0 ? "even" : "odd";
	}
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkOddEven(n);
		return cache[n];
	}
})();

function memoize(algoFn, context, keyGeneratorFn){
	var cache = {};
	var context = context || this;

	keyGeneratorFn = keyGeneratorFn || function(value){
		return JSON.stringify(value);
	};
	return function(){
		var key = keyGeneratorFn(arguments);
		if (typeof cache[key] === 'undefined')
			cache[key] = algoFn.apply(context, arguments);
		return cache[key];
	}
}