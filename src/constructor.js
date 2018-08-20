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
