class StackComArray {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.size() === 0;
	}

	size() {
		return this.items.length;
	}

	clear() {
		this.items = [];
	}
}

class StackComObjeto {
	constructor() {
		this.count = 0;
		this.items = {};
	}

	push(element) {
		this.items[this.count] = element;
		this.count++;
	}

	size() {
		return this.count;
	}

	isEmpty() {
		return this.count === 0;
	}

	pop() {
		if (this.isEmpty()) {
			return undefined;
		}
		this.count--;
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}

	peek() {
		if (this.isEmpty()) return undefined;

		return this.items[this.count - 1];
	}

	toString() {
		if (this.isEmpty()) {
			return "";
		}

		let objString = `${this.items[0]}`;
		for (let index = 0; index < this.count; index++) {
			objString = `${objString},${this.items[i]}`;
		}
		return objString;
	}

	clear() {
		this.items = {}
		this.count = 0;
	}
}