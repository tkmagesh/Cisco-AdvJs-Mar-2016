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
		function sort(){
			for(var i=0; i<products.length-1; i++)
				for(var j=i+1; j<products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sort();
		console.table(products);
	});

	describe("sorting any list by any attribute", function(){
		function sort(list, attrName){
			for(var i=0; i<list.length-1; i++)
				for(var j=i+1; j<list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe("Products by cost", function(){
			sort(products, "cost");
			console.table(products);
		});
		describe("Products by units", function(){
			sort(products, "units");
			console.table(products);
		})
	});
	describe("sorting any list by any comparer", function(){
		function sort(list, comparerFn){
			for(var i=0; i<list.length-1; i++)
				for(var j=i+1; j<list.length; j++)
					if (comparerFn(list[i], list[j]) > 0 ){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe("Products by value (units * cost)", function(){
			var productsComparerByValue = function(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;
				if (p1Value < p2Value) return -1;
				if (p1Value === p2Value) return 0;
				return 1;
			};
			sort(products, productsComparerByValue);
			console.table(products);
		});
		
	});
});