
/*
BEGIN variable tests
*/

module ("Variables and Types");
test("variableModification tests", function( assert ){
	var out = variableModification( 6 );
	assert.expect( 7 );
	assert.equal(typeof out[0], 'number', 'plus5 is a number.');
	assert.equal(out[0], 11, 'Does add 5.');
	assert.equal(typeof out[1], 'string', 'asString is a string.');
	assert.equal(out[1], '6', 'asString is the right string.');
	assert.equal(typeof out[2], 'string', 'asStringFoo is a string.');
	assert.equal(out[2], 'Your Number is 6', 'Approprate string is returned.');
	assert.strictEqual(out[3], 6, 'a was not modified.');
});

test("isString tests", function( assert ){
	assert.expect( 4 );
	assert.ok(isString('foo bar'),'Identifies a string.');
	assert.ok(!isString(42),'Rejects a number.');
	assert.ok(!isString(null),'Rejects null.');
	assert.ok(!isString(new String('foo')),'Rejects string object.');
});

test("isNull tests", function( assert ){
	assert.expect( 5 );
	assert.ok(isNull(null),'Identifies null.');
	assert.ok(!isNull(42),'Rejects a number.');
	assert.ok(!isNull(undefined),'Rejects undefined.');
	assert.ok(!isNull(NaN),'Rejects NaN.');
	assert.ok(!isNull(new String('foo')),'Rejects string object.');
});

/*
END variable tests
*/

/*
BEGIN function tests
*/
module("functions");
test("uselessFunction tests", function(assert){
	assert.expect( 1 );
	assert.ok(uselessFunction() === null, 'uselessFunction returns null.');
});
test("bar function tests",function(assert){
	assert.expect( 4 );
	assert.equal(barType, 'string','bar was at one point not a function');

	var a = [1.5,1,5];
	var result = bar(a);
	assert.ok(result,'Returns success on valid input.');
	assert.deepEqual(a, [3,2,10], 'Correctly doubles array contents.');
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
	assert.strictEqual(result, true,'Correctly handles non-numbers.');
});

test("parseGit function tests",function(assert){
	assert.expect( 7 );
	var logs = ['3782618 Wed, 7 Jan 2015 21:42:26 -0800 "Initial commit"','c314332 Wed, 7 Jan 2015 22:02:38 -0800 "Add empty bio.md"'];
	var logsParsed = [new GitLog('3782618', new Date('Wed, 7 Jan 2015 21:42:26 -0800'), "Initial commit" ), new GitLog('c314332', new Date('Wed, 7 Jan 2015 22:02:38 -0800'), "Add empty bio.md" )];
	assert.ok(typeof parseGit == 'function', 'parseGit function exists.');
	var result = parseGit(logs);
	assert.equal(result[0].hash,logsParsed[0].hash,'Properly parses hash 0.');
	assert.equal(result[1].hash,logsParsed[1].hash,'Properly parses hash 1.');
	assert.equal(result[0].message,logsParsed[0].message,'Properly parses message 0.');
	assert.equal(result[1].message,logsParsed[1].message,'Properly parses message 1.');
	assert.equal(result[0].date.getTime(),logsParsed[0].date.getTime(),'Properly parses date 0.');
	assert.equal(result[1].date.getTime(),logsParsed[1].date.getTime(),'Properly parses date 1.');
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
			this.testLog = new MessageLog('TesterMcGee');
		}
		catch(e){
			console.log("Error creating MessageLog.");
		}
	}
});

test("returnObjectLiteral tests", function(assert){
	assert.expect( 2 );
	assert.equal(typeof returnObjectLiteral, 'function', 'returnObjectLiteral function exists');
	assert.deepEqual(returnObjectLiteral(), {'type':'Goldfish','brand':'Pepperidge Farm','flavor':'Cheddar','count':2000}, 'Returns the correct object.');
});

test("MessageLog constructor tests", function(assert){
	assert.expect( 2 );
	assert.equal(typeof MessageLog, 'function', 'MessageLog constructor exists.');
	assert.equal(typeof new MessageLog('foo'), 'object', 'Constructor constructs an object.');
});

test("MessageLog instance tests", function(assert){
	assert.expect( 7 );
	this.testLog.logMessage('I 0', 1);
	assert.equal(this.testLog.lastReceivedMessage(),'I 0','Records 1 received message.');
	assert.equal(this.testLog.totalReceived(),1,'Count reflects 1 received message.');
	this.testLog.logMessage('I 1', 1);
	this.testLog.logMessage('I 2', 1);
	this.testLog.logMessage('I 3', 1);
	this.testLog.logMessage('S 0', 0);
	this.testLog.logMessage('S 1', 0);
	this.testLog.logMessage('S 2', 0);
	this.testLog.logMessage('S 3', 0);
	this.testLog.logMessage('S 4', 0);
	this.testLog.logMessage('S 5', 0);
	assert.equal(this.testLog.totalReceived(),4,'Count reflects 4 received message.');
	assert.equal(this.testLog.totalSent(),6,'Count reflects 6 sent message.');
	assert.equal(this.testLog.getSentMessage(0),'S 5','Most recent message sent is "S 5"');
	assert.equal(this.testLog.getSentMessage(4),'S 1','5th Most recent message sent is "S 1"');
	assert.equal(typeof MessageLog.prototype.lastReceivedMessage, 'function', 'lastReceivedMessage was added to prototype');
});

test("Student instance",function(assert){
	assert.expect( 1 );
	assert.equal(myLog.totalReceived(), 3,'myLog received 3 messages.');
});
/*
END object tests
*/
