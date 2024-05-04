import { defaultEquals } from "../../utils.js";
import { Node } from "../linked-list.models.js";
import { LinkedList } from "../linked-list.js";

class CircularLinkedList extends LinkedList {
	constructor(equalsFn = defaultEquals) {
		super(equalsFn);
	}

	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			const node = new Node(element);
			let current = this.head;
			if (index === 0) {
				if (this.head == null) {
					this.head = node;
					node.next = this.head;
				} else {
					node.next = current;
					current = this.getElementAt(this.size() - 1);
					this.head = node;
					current.next = this.head;
				}
			} else {
				const previous = this.getElementAt(index - 1);
				node.next = previous.next;
				previous.next = node;
			}
			this.count++;
			return true;
		}
		return false;
	}

	removeAt(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head;
			if (index === 0) {
				if (this.size() === 1) {
					this.head = undefined;
				} else {
					const removed = this.head;
					current = this.getElementAt(this.size() - 1);
					this.head = this.head.next;
					current.next = this.head;
					current = removed;
				}
			} else {
				const previous = this.getElementAt(index - 1);
				current = previous.next;
				previous.next = current.next;
			}
			this.count--;
			return current.element;
		}
		return undefined;
	}
}

const x = new CircularLinkedList();
x.insert(1, 0);
x.insert(2, 1);
x.insert(3, 0);
x.removeAt(1);
