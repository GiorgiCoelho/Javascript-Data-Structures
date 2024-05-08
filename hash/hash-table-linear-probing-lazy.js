import { ValuePair, ValuePairLazy } from "../models.js";

export class HashTableLinearProbingLazy {
	constructor() {
		this.table = {};
	}

	loseloseHashCode(key) {
		if (typeof key === "number") {
			return key;
		}

		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}

		return hash % 37;
	}

	hashCode(key) {
		return this.loseloseHashCode(key);
	}

	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key);
			if (
				this.table[position] == null ||
				(this.table[position] != null && this.table[position].isDeleted)
			) {
				this.table[position] = new ValuePairLazy(key, value);
			} else {
				let index = position + 1;
				while (this.table[index] != null && !this.table[position].isDeleted) {
					index++;
				}
				this.table[index] = new ValuePairLazy(key, value);
			}
			return true;
		}
		return false;
	}

	get(key) {
		const position = this.hashCode(key);
		if (this.table[position] != null) {
			if (this.table[position].key === key && !this.table[position].isDeleted) {
				return this.table[position].value;
			}
			let index = position + 1;
			while (
				this.table[index] != null &&
				(this.table[index].key !== key || this.table[index].isDeleted)
			) {
				if (this.table[index].key === key && this.table[index].isDeleted) {
					return undefined;
				}
				index++;
			}
			if (
				this.table[index] != null &&
				this.table[index].key === key &&
				!this.table[index].isDeleted
			) {
				return this.table[index].value;
			}
		}
		return undefined;
	}

	remove(key) {
		const position = this.hashCode(key);
		if (this.table[position] != null) {
			if (this.table[position].key === key && !this.table[position].isDeleted) {
				this.table[position].isDeleted = true;
				return true;
			}
			let index = position + 1;
			while (
				this.table[index] != null &&
				(this.table[index].key !== key || this.table[index].isDeleted)
			) {
				index++;
			}
			if (
				this.table[index] != null &&
				this.table[index].key === key &&
				!this.table[index].isDeleted
			) {
				this.table[index].isDeleted = true;
				return true;
			}
		}
		return false;
	}

	isEmpty() {
		return this.size() === 0;
	}

	size() {
		let count = 0;
		Object.values(this.table).forEach((valuePair) => {
			count += valuePair.isDeleted === true ? 0 : 1;
		});
		return count;
	}

	clear() {
		this.table = {};
	}

	getTable() {
		return this.table;
	}

	toString() {
		if (this.isEmpty()) {
			return "";
		}
		const keys = Object.keys(this.table);
		let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
		for (let i = 1; i < keys.length; i++) {
			objString = `${objString},{${keys[i]} => ${this.table[
				keys[i]
			].toString()}}`;
		}
		return objString;
	}
}

var hash = new HashTableLinearProbingLazy();
hash.put("Ygritte", "ygritte@email.com");
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Jack", "jack@email.com");
hash.put("Jasmine", "jasmine@email.com");
hash.put("Jake", "jake@email.com");
hash.put("Nathan", "nathan@email.com");
hash.put("Athelstan", "athelstan@email.com");
hash.put("Sue", "sue@email.com");
hash.put("Aethelwulf", "aethelwulf@email.com");
hash.put("Sargeras", "sargeras@email.com");
hash.remove("Athelstan");

hash.put("Jake", "jake@email.com");
