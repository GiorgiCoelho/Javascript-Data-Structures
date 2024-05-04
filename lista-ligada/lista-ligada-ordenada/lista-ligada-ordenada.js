import { defaultCompare, defaultEquals, Compare } from "../../utils.js";
import { LinkedList } from "../linked-list.js";

class SortedLinkedList extends LinkedList {
	constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
		super(equalsFn);
		this.compareFn = compareFn;
	}

	insert(element, index = 0) {
		if (this.isEmpty()) {
			return super.insert(element, 0);
		}
		const pos = this.getIndexNextSortedElement(element);
		return super.insert(element, pos);
	}

	getIndexNextSortedElement(element) {
		let current = this.head;
		let i = 0;
		for (; i < this.size() && current; i++) {
			const comp = this.compareFn(element, current.element);
			if (comp === Compare.LESS_THAN) {
				return i;
			}
			current = current.next;
		}
		return i;
	}
}

const list = new SortedLinkedList();
list.insert(15);
list.insert(20);
list.insert(10);
list.insert(25);
