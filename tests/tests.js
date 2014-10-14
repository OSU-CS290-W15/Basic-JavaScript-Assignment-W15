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

/*
END variable tests
*/

/*
BEGIN function tests
*/
module("functions");
test("uselessFunction tests", function(assert){
	assert.equal(typeof uselessFunction(), 'string', 'uselessFunction returns a string.');
	assert.equal(uselessFunction(), 'useless', 'Returns the string \'useless\'');
});
test("bar function tests",function(assert){
	assert.equal(barType, 'string','bar was at one point not a function');

	var a = [1,1,5];
	var result = bar(a);
	assert.ok(result,'Returns success on valid input.')
	assert.deepEqual(a, [2,2,10], 'Correctly doubles array contents.')
	try{
		var result = false;
		if( bar(['nope']) === false){
			result = true;
		}
	}
	catch(e){
		if (e == 'studentTypeError' ){
			result = true;
		}
	}
	assert.strictEqual(result, true,'Correctly handles non-numbers.')
});

test("emailParse function tests",function(assert){
	assert.ok(typeof emailParse == 'function', 'emailParse function exists.');
	var inArr = ['foo@bar.com','baz@buzz.edu','foo@fizz.gov'];
	assert.deepEqual(emailParse(inArr),[['foo','baz','foo'],['bar','buzz','fizz'],['com','edu','gov']],'Properly parses array.')
});
/*
END function tests
*/
/*
BEGIN object tests
*/
module("Objects", {
	setup:function() {
		try{
			this.testCat = new Cat('Foo','Pink');
		}
		catch(e){
			console.log("Error creating Cat.")
		}
	}
});

test("returnObjectLiteral tests", function(assert){
	assert.equal(typeof returnObjectLiteral, 'function', 'returnObjectLiteral function exists');
	assert.deepEqual(returnObjectLiteral(), {'type':'Goldfish','brand':'Pepperidge Farm','flavor':'Cheddar','count':2000}, 'Returns the correct object.');
});

test("Cat constructor tests", function(assert){
	assert.equal(typeof Cat, 'function', 'Cat constructor exists.');
	assert.equal(typeof new Cat('foo','bar'), 'object', 'Constructor constructs and object.')
});

test("Cat instance tests", function(assert){
	this.testCat.destroyFurniture('couch',200);
	assert.equal(this.testCat.totalDestroyed(),200,'Records destruction of 1 item worth $200.');
	this.testCat.destroyFurniture('carpet',75);
	assert.equal(this.testCat.totalDestroyed(),275,'Adds carpet dammage.');
	assert.deepEqual(this.testCat.lastDestroyedFurniture(),{'name':'carpet','cost':75},'Returns correct last object destroyed.');
	this.testCat.destroyFurniture('car',15000);
	assert.deepEqual(this.testCat.nthDestroyed(1),{'name':'carpet','cost':75},'Correctly returns the 2nd destroyed object.');
	assert.equal(myCat.name, 'Maru', 'Make sure the myCat instance is named Maru.');
	assert.equal(myCat.color, 'Orange', 'Make sure the myCat instance is orange.')
	assert.ok(myCat.totalDestroyed() >= 1000,'myCat destoryed at least 1000 of furniture.')
});

test("Cat prototype tests",function(assert){
	assert.equal(typeof Cat.prototype.pet, 'function','pet function has been added to prototype.');
	assert.equal(this.testCat.pet(3), 'CLAW!','Cat kills your hand for petting too much.');
	assert.equal(this.testCat.pet(1), 'Purr.','Cat Purrs for exactly 1 pet.');
	assert.equal(this.testCat.pet(2.5), 'Purr.','Cat Purrs for exactly 2.5 pets.');
});
/*
END object tests
*/