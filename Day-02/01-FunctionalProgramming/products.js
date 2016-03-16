var products = [
	{id : 4, name : "Pen", cost : 10, units : 50, category : 1},
	{id : 7, name : "Hen", cost : 100, units : 10, category : 2},
	{id : 5, name : "Ten", cost : 10, units : 10, category : 2},
	{id : 8, name : "Den", cost : 200, units : 6, category : 1},
	{id : 2, name : "Zen", cost : 150, units : 5, category : 1}
]

/*
sort
filter
all
any
min
max
sum
avg
aggregate
groupBy
*/
function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

describe("Default list", function(){
	console.table(products);
});

describe("Sorting", function(){
	describe("Default sorting [products by id]", function(){
		//sort();
		console.table(products);
	});

	describe("sorting any list by any attribute [products by cost]", function(){
		//sort();
		console.table(products);
	});
	describe("sorting any list by any comparison [ products by value(units * cost)", function(){
		//sort();
		console.table(products);
	});
});