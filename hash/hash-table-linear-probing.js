import { ValuePair } from "../models.js";

export class HashTableLinearProbing {
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
	} // OU

	djb2HashCode(key) {
		let hash = 5381;
		for (let index = 0; index < key.length; index++) {
			hash = hash * 33 + key.charCodeAt(i);
		}
		return hash % 1013;
	}

	hashCode(key) {
		return this.loseloseHashCode(key);
	}

	put(key, value) {
		if (key != null && value != null) {
			const position = this.hashCode(key);
			if (this.table[position] == null) {
				this.table[position] = new ValuePair(key, value);
			} else {
				let index = position + 1;
				while (this.table[index] != null) {
					index++;
				}
				this.table[index] = new ValuePair(key, value);
			}
			return true;
		}
		return false;
	}

	get(key) {
		const position = this.hashCode(key);
		if (this.table[position] != null) {
			if (this.table[position].key === key) {
				return this.table[position].value;
			}
			let index = position + 1;
			while (this.table[index] != null && this.table[index].key !== key) {
				index++;
			}
			if (this.table[index] != null && this.table[index].key) {
				return this.table[index].value;
			}
		}
		return undefined;
	}

	remove(key) {
		const position = this.hashCode(key);
		if (this.table[position] != null) {
			if (this.table[position].key === key) {
				delete this.table[position];
				this.verifyRemoveSideEffect(key, position);
				return true;
			}
			let index = position + 1;
			while (this.table[index] != null && this.table[index].key !== key) {
				index++;
			}
			if (this.table[index] != null && this.table[index].key === key) {
				delete this.table[index];
				this.verifyRemoveSideEffect(key, index);
				return true;
			}
		}
		return false;
	}

	verifyRemoveSideEffect(key, removedPosition) {
		const hash = this.hashCode(key);
		let index = removedPosition + 1;
		while (this.table[index] != null) {
			const posHash = this.hashCode(this.table[index].key);
			if (posHash <= hash || posHash <= removedPosition) {
				this.table[removedPosition] = this.table[index];
				delete this.table[index];
				removedPosition = index;
			}
			index++;
		}
	}
}

var hash = new HashTableLinearProbing();
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
hash.put("Jake", "jake@email.com");

hash.remove("Jonathan");
