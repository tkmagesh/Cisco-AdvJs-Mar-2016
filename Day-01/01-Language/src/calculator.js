function add(){
	function parseArg(n){
		if (typeof n === 'function') return parseArg(n());
		if (Array.isArray(n)) return add.apply(this, n);
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments,1));
}

/*
A function is invoked as a method of an object
	this -> object

*/