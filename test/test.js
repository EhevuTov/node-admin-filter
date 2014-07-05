var test = require('tap').test;
var Filter = require ('../filter.js');

test ("test property Getter/Setter functions", function(t){
	t.test("Filter Name", function (t) {
		Filter.name = "James";
		t.equal(Filter.name, "James");
		t.end();
	});

	t.test("Start Time", function (t) {
		Filter.startTime = "James";
		t.equal(Filter.startTime, "James");
		t.end();
	});

	t.end();
});

