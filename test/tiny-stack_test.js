var stack = require("../lib/tiny-stack");

exports["clear"] = {
	setUp: function (done) {
		this.stack = stack();
		done();
	},
	tests: function (test) {
		test.expect(6);
		test.strictEqual(this.stack.length(), 0, "Should be '0'");
		test.strictEqual(this.stack.empty(), true, "Should be 'true'");
		this.stack.push(true);
		test.strictEqual(this.stack.length(), 1, "Should be '1'");
		test.strictEqual(this.stack.empty(), false, "Should be 'false'");
		this.stack.clear();
		test.strictEqual(this.stack.length(), 0, "Should be '0'");
		test.strictEqual(this.stack.empty(), true, "Should be 'true'");
		test.done();
	}
};

exports["pop"] = {
	setUp: function (done) {
		this.stack = stack();
		done();
	},
	tests: function (test) {
		test.expect(4);
		test.strictEqual(this.stack.length(), 0, "Should be '0'");
		this.stack.push(true);
		test.strictEqual(this.stack.length(), 1, "Should be '1'");
		test.strictEqual(this.stack.pop(), true, "Should be 'true'");
		test.strictEqual(this.stack.length(), 0, "Should be '0'");
		test.done();
	}
};

exports["peek"] = {
	setUp: function (done) {
		this.stack = stack();
		done();
	},
	tests: function (test) {
		test.expect(4);
		test.strictEqual(this.stack.length(), 0, "Should be '0'");
		this.stack.push(true);
		test.strictEqual(this.stack.length(), 1, "Should be '1'");
		test.strictEqual(this.stack.peek(), true, "Should be 'true'");
		test.strictEqual(this.stack.length(), 1, "Should be '0'");
		test.done();
	}
};

exports["search"] = {
	setUp: function (done) {
		this.stack = stack();
		done();
	},
	tests: function (test) {
		test.expect(9);
		test.strictEqual(this.stack.empty(), true, "Should be 'true'");
		this.stack.push('a');
		this.stack.push('b');
		this.stack.push('c');
		this.stack.push('d');
		test.strictEqual(this.stack.length(), 4, "Should be '4'");
		test.strictEqual(this.stack.empty(), false, "Should be 'false'");
		test.strictEqual(this.stack.search('a'), 4, "Should be '4'");
		test.strictEqual(this.stack.search('b'), 3, "Should be '3'");
		test.strictEqual(this.stack.search('c'), 2, "Should be '2'");
		test.strictEqual(this.stack.search('d'), 1, "Should be '1'");
		test.strictEqual(this.stack.search('e'), -1, "Should be '-1'");
		this.stack.pop();
		test.strictEqual(this.stack.search('c'), 1, "Should be '1'");
		test.done();
	}
};
