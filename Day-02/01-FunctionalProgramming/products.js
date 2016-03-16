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

describe("Filtering", function(){
	describe("Default filtering (all costly products)", function(){
		function filter(){
			var result = [];
			for(var i=0; i<products.length; i++)
				if (products[i].cost > 100)
					result.push(products[i]);
			return result;
		}
		var costlyProducts = filter();
		console.table(costlyProducts);
	});
	describe("Any list by any criteria", function(){
		function filter(list, criteriaFn){
			var result = [];
			for(var i=0; i<list.length; i++)
				if (criteriaFn(list[i]))
					result.push(list[i]);
			return result;
		}
		function negate(criteriaFn){
			return function(){
				return !criteriaFn.apply(this, arguments);
			}
		}
		describe("Products by cost", function(){
			var costlyProductCriteria = function(product){
				return product.cost > 100;
			};
			describe("All costly products [cost > 100]", function(){
				var costlyProducts = filter(products, costlyProductCriteria);
				console.table(costlyProducts);
			});	

			/*var affordableProductCriteria = function(product){
				return !costlyProductCriteria(product);
			};*/
			var affordableProductCriteria = negate(costlyProductCriteria);

			describe("All affordable products [ cost <= 100]", function(){
				var affordableProducts = filter(products, affordableProductCriteria);
				console.table(affordableProducts);
			});


		})
		
		describe("Products by category", function(){
			var category1ProductCriteria = function(product){
				return product.category === 1;
			};
			describe("All category-1 poducts", function(){
				var category1Products = filter(products, category1ProductCriteria);
				console.table(category1Products);
			})
			/*var nonCategory1ProductCriteria = function(product){
				return !category1ProductCriteria(product);
			};*/
			var nonCategory1ProductCriteria = negate(category1ProductCriteria);
			
			describe("All non category-1 poducts", function(){
				var nonCategory1Products = filter(products, nonCategory1ProductCriteria);
				console.table(nonCategory1Products);
			})
		});
	})
});
