var stack = require("../lib/tiny-stack");

exports["clear"] = {
	setUp: function (done) {
		this.stack = stack();
		done();
	},
	tests: function (test) {
		test.expect(3);
		test.strictEqual(this.stack.length(), 0, "Should be '0'");
		this.stack.push(true);
		test.strictEqual(this.stack.length(), 1, "Should be '1'");
		this.stack.clear();
		test.strictEqual(this.stack.length(), 0, "Should be '0'");
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
