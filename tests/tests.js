module("Factorial", {
	setup: function() {
		this.simpleMath = new SimpleMath();
	},
	teardown: function() {
		delete this.simpleMath;
	}
});

test("calculating Factorial for a positive number", function() {
	equal(this.simpleMath.getFactorial(3), 6, "Factorial of three must equal 6");
});

test("calculating factorial for zero", function(){
	equal (this.simpleMath.getFactorial(0), 1, "Factorial of zero must equal one");
});
test("throwing an error when calculating the factorial for a negative number", 
	function(){
		throws(function() {
			this.simpleMath.getFactorial(-10)
		}, Error("There is no factorial for negative numbers"), 'Throws exception on negative number');
});
test("throwing an error when calculating the factorial for a string ", 
	function(){
		throws(function() {
			this.simpleMath.getFactorial('foo')
		}, Error("There is no factorial for non-numbers"),'Throws exception on string.');
});


module ("signum", {
	setup: function() {
		this.simpleMath = new SimpleMath();
	},
	teardown: function() {
		delete this.simpleMath;
	}
});


test("calculating signum for a positive number", function() { 
	equal(this.simpleMath.signum(3), 1, "Signum of three must equal one");
});
test("calculating signum for zero", function() {
	equal(this.simpleMath.signum(0), 0, "Signum of zero must equal zero");
});
test("calculating signum for a negative number", function() {
	equal(this.simpleMath.signum(-1000), -1, "Signum of -1000 must equal -1");
});


module ("Average", {
	setup: function() {
		this.simpleMath = new SimpleMath();
	},
	teardown: function() {
		delete this.simpleMath;
	}
});

test("calculating the average of two numbers", function() {
	equal(this.simpleMath.average(3, 6), 4.5, "Average of 3 and 6 must equal 4.5");
});

/*
BEGIN variable tests
*/

module ("Variables and Types");
test("variableModification tests", function( assert ){
	var out = variableModification( 42 );
	assert.equal(typeof out[0], 'number', 'plus5 is a number.');
	assert.equal(out[0], 47, 'Does add 5.');
	assert.equal(typeof out[1], 'string', 'asString is a string.');
	assert.equal(out[1], '42', 'asString is the right string.')
	assert.equal(typeof out[2], 'string', 'asStringFoo is a string.');
	assert.equal(out[2], '42foo', 'asStringFoo is appended with \'foo\'.');
	assert.strictEqual(out[3], 42, 'a was not modified.')
});

test("isString tests", function( assert ){
	assert.ok(isString('foo bar'),'Identifies a string.');
	assert.ok(!isString(42),'Rejects a number.');
	assert.ok(!isString(null),'Rejects null.');
	assert.ok(!isString(new String('foo')),'Rejects string object.');
});

test("isUndefined tests", function( assert ){
	assert.ok(isUndefined(undefined),'Identifies undefined.');
	assert.ok(!isUndefined(42),'Rejects a number.');
	assert.ok(!isUndefined(null),'Rejects null.');
	assert.ok(!isUndefined(NaN),'Rejects NaN.');
	assert.ok(!isUndefined(new String('foo')),'Rejects string object.');
});