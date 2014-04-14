var _topN = require("../"),
	topN = _topN.topN,
	init = _topN.init,

	assert = require("assert"),
	path = require("path");

const NUMBER_FILE = path.resolve(__dirname, "numbers.txt"); // If file is not present or larger file is required, run test/bin/generateFile
const BIG_NUMBER_FILE = path.resolve(__dirname, "numbers-2.txt");

describe("topN", function() {
	describe("Constructor", function() {
		it("should create a new object with N", function() {
			var top = new topN(50);

			assert.equal(top.N, 50);
		});

		it("should create a new object with default N 30", function() {
			var top = new topN();

			assert.equal(top.N, 30);
		});
	});

	describe("#testNumber", function() {
		it("should add the first numbers to the array regardless", function() {
			var top = new topN();

			top.testNumber(1000);

			assert.equal(top.numbers[0], 1000);
		});

		it("should add the second, third number to the end of the array since larger", function() {
			var top = new topN();

			top.testNumber(1000);
			top.testNumber(1002);
			top.testNumber(1001);

			assert.equal(top.numbers[0], 1000);
			assert.equal(top.numbers[1], 1001);
			assert.equal(top.numbers[2], 1002);
		});

		it("should maintain the lowest", function() {
			var top = new topN();

			top.testNumber(1000);
			assert.equal(top.lowest, 1000);

			top.testNumber(800);
			assert.equal(top.lowest, 800);

			top.testNumber(1200);
			assert.equal(top.lowest, 800);
		});

		it("should maintain a maximum of 30 numbers", function() {
			var top = new topN();

			for(var i = 0; i < 600; i++) top.testNumber(i);

			assert.equal(top.numbers.length, top.N);
		});
	});
});

describe("init", function() {
	it("should run the program on an existing text file", function(done) {
		init(NUMBER_FILE, 30, function() { done(); });
	});

	it("should run the program on a big, existing text file", function(done) {
		init(BIG_NUMBER_FILE, 30, function() { done(); });
	});

	it("should run the program on an non-existant text file", function(done) {
		init("foobar.txt", 30, function() { done(); });
	});
});