class Node {
    /**
     * @param {string} value 
     */
    constructor(value) {
        this.value = value;
        /** @type {Node|null} */
        this.next = null;
    }
}

class CircularSinglyLinkedList {
    constructor() {
        /** @type {Node|null} */
        this.tail = null;
        this.size = 0;
    }

    length() {
        return this.size;
    }

    append(element) {
        if (typeof element !== 'string' || element.length !== 1) {
            throw new Error('Element must be a single character.');
        }
        const newNode = new Node(element);
        if (!this.tail) {
            newNode.next = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
}

module.exports = CircularSinglyLinkedList;
