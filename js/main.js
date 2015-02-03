function howdy() {
	console.log("Rachel Knight says what's up!");
}

howdy();


var numba = function (string) {
	if (string < 7) {
		console.log("What a short little word!");
	}

	else if (string > 7) {
		console.log("I'm sorry but that's too many to count.");
	}

	else if (string == 7) {
		console.log("7, what a perfect choice!");
	}

}

numba( "7" );
numba( "seventy" );
numba( "university" );


function inception(callback, value) {
	callback(value);
}

function callback() {
	console.log("Bridesmaids is a fantastic movie.")
}

inception(callback);