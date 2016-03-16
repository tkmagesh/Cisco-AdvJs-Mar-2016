/* Create an object and assign it to a variable 'spinner' */

var spinner = ....

/*The object created must exhibit the following behavior
	spinner.up() // => 1
	spinner.up() // => 2
	spinner.up() // => 3
	spinner.up() // => 4

	spinner.down() // => 3
	spinner.down() // => 2
	spinner.down() // => 1
	spinner.down() // => 0
	spinner.down() // => -1

	THE VARIABLE USED TO TRACK THE VALUE SHOULD NOT BE VISIBLE TO THE OUTSIDE WORLD
*/


var spinner = (function (){
	var spinner = {};
	var count = 0;
	spinner.up = function(){
		return ++count;
	};
	spinner.down = function(){
		return --count;
	};
	return spinner;
})();

var spinner = (function(){
	var count = 0;
	return {
		up : function(){ return ++count; },
		down : function(){ return --count; }
	};
})();