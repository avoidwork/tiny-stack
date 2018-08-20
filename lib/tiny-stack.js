/**
 * Tiny stack for browser or server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2018
 * @license BSD-3-Clause
 * @link http://avoidwork.github.io/tiny-stack
 * @version 2.0.1
 */
(function (global) {
	"use strict";

	class TinyStack {
		constructor (...args) {
			this.data = [null, ...args];
			this.top = this.data.length - 1;
		}

		clear () {
			this.data.length = 1;
			this.top = 0;

			return this;
		}

		empty () {
			return this.top === 0;
		}

		length () {
			return this.top;
		}

		peek () {
			return this.data[this.top];
		}

		pop () {
			let result;

			if (this.top > 0) {
				result = this.data.pop();
				this.top--;
			}

			return result;
		}

		push (arg) {
			this.data[++this.top] = arg;

			return this;
		}

		search (arg) {
			const index = this.data.indexOf(arg);

			return index === -1 ? -1 : this.data.length - index;
		}
	}

	function factory (...args) {
		return new TinyStack(...args);
	}

	// Node, AMD & window supported
	if (typeof exports !== "undefined") {
		module.exports = factory;
	} else if (typeof define === "function" && define.amd !== void 0) {
		define(() => factory);
	} else {
		global.stack = factory;
	}
}(typeof window !== "undefined" ? window : global));
