class HashTable {
	constructor() {
		this.table = {};
	}

	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key);
			this.table[position] = new ValuePair(key, value);
			return true;
		}
		return false;
	}

	get(key) {
		const valuePair = this.table[this.hashCode(key)];
		return valuePair == null ? undefined : valuePair.value;
	}

	remove(key) {
		const hash = this.hashCode(key);
		const valuePair = this.table[hash];
		if (valuePair != null) {
			delete this.table[hash];
			return true;
		}
		return false;
	}

	loseloseHashCode(key) {
		if (typeof key === "number") {
			return key;
		}
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i); // {4}
		}
		return hash % 37;
	}

	hashCode(key) {
		return this.loseloseHashCode(key);
	}
}

class ValuePair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
	toString() {
		return `[#${this.key}: ${this.value}]`;
	}
}

const hash = new HashTable();
hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnow@email.com");
hash.put("Tyrion", "tyrion@email.com");
console.log(hash.hashCode("Gandalf") + " - Gandalf");
console.log(hash.hashCode("John") + " - John");
console.log(hash.hashCode("Tyrion") + " - Tyrion");
