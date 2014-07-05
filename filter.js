var Filter = {
	a: 0
};

Object.defineProperties(Filter, {
	"name": {
		get: function() { return this.filterName; },
		set: function(x) { this.filterName = x; },
		enumerable: true,
		type: "string",
		bytes: 64,
		endian: "little"
	},
	"startTime": {
		get: function() { return this.filterStartTime; },
		set: function(x) { this.filterStartTime = x; },
		enumerable: true,
		type: "string",
		bytes: 8,
		endian: "little"
	},
	"endTime": {
		get: function() { return this.filterEndTime; },
		set: function(x) { this.filterEndTime = x; },
		enumerable: true,
		type: "string",
		bytes: 8,
		endian: "little"
	}
});

module.exports = Filter;
