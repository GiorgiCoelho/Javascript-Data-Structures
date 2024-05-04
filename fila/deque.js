class Deque {
	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}

	addFront(element) {
		if (this.isEmpty()) {
			this.addBack(element);
		} else if (this.lowestCount > 0) {
			this.lowestCount--;
			this.items[this.lowestCount] = element;
		} else {
			for (let index = this.count; index > 0; index--) {
				this.items[index] = this.items[index - 1];
			}
			this.count++;
			this.lowestCount = 0;
			this.items[0] = element;
		}
	}

	addBack(element) {
		this.items[this.count] = element;
		this.count++;
	}

	removeFront() {
		if (this.isEmpty()) {
			return undefined;
		}

		const result = this.items[this.lowestCount];
		delete this.items[this.lowestCount];
		this.lowestCount++;

		return result;
	}

	removeBack() {
		if (this.isEmpty()) {
			return undefined;
		}

		this.count--;
		const result = this.items[this.count];
		delete this.items[this.count];

		return result;
	}

	isEmpty() {
		return this.size() === 0;
	}

	size() {
		return this.count - this.lowestCount;
	}
}

const x = new Deque();
x.addFront("giorgi");
x.addFront("andressa");
x.addBack("claudia");
x.removeBack();

console.log(x.size());
