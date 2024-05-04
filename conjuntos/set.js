class SetPrototype {
	constructor() {
		this.items = {};
	}

	add(element) {
		if (!this.has(element)) {
			this.items[element] = element;
			return true;
		}
		return false;
	}

	delete(element) {
		if (this.has(element)) {
			delete this.items[element];
			return true;
		}
		return false;
	}

	has(element) {
		return Object.prototype.hasOwnProperty.call(this.items, element);
		//return element in this.items;
	}

	clear() {
		this.items = {};
	}

	size() {
		return Object.keys(this.items).length;
	}

	values() {
		return Object.values(this.items);
	}

	union(otherSet) {
		const unionSet = new SetPrototype();
		this.values().forEach((value) => unionSet.add(value));
		otherSet.values().forEach((value) => unionSet.add(value));
		return unionSet;
	}

	intersection(otherSet) {
		const intersectionSet = new SetPrototype();
		const values = this.values();
		const otherValues = otherSet.values();

		let biggerSet = values;
		let smallerSet = otherValues;

		if (otherValues.length - values.length > 0) {
			biggerSet = otherValues;
			smallerSet = values;
		}
		smallerSet.forEach((value) => {
			if (biggerSet.includes(value)) {
				intersectionSet.add(value);
			}
		});

		return intersectionSet;
	}

	difference(otherSet) {
		const differenceSet = new SetPrototype();
		this.values().forEach((value) => {
			if (!otherSet.has(value)) {
				differenceSet.add(value);
			}
		});

		return differenceSet;
	}

	isSubsetOf(otherSet) {
		if (this.size() > otherSet.size()) {
			return false;
		}

		let isSubset = true;
		this.values().every((value) => {
			if (!otherSet.has(value)) {
				isSubset = false;
				return false;
			}
			return true;
		});
		return isSubset;
	}
}

const set = new SetPrototype();
set.add(1);
set.add(2);

console.log(set.items);
