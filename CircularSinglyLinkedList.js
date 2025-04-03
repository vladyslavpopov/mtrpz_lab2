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

    insert(element, index) {
        if (typeof element !== 'string' || element.length !== 1) {
            throw new Error('Element must be a single character.');
        }
        if (index < 0 || index > this.size) {
            throw new Error('Invalid index');
        }
        const newNode = new Node(element);
        if (this.size === 0) {
            newNode.next = newNode;
            this.tail = newNode;
        } else if (index === 0) {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
        } else {
            let current = this.tail.next;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
            if (index === this.size) {
                this.tail = newNode;
            }
        }
        this.size++;
    }

    delete(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Invalid index');
        }
        let deletedValue;
        if (this.size === 1) {
            deletedValue = this.tail.value;
            this.tail = null;
        } else if (index === 0) {
            const head = this.tail.next;
            deletedValue = head.value;
            this.tail.next = head.next;
        } else {
            let prev = this.tail.next;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            const current = prev.next;
            deletedValue = current.value;
            prev.next = current.next;
            if (index === this.size - 1) {
                this.tail = prev;
            }
        }
        this.size--;
        return deletedValue;
    }

    deleteAll(element) {
        if (this.size === 0) return;

        let count = this.size;
        let current = this.tail.next;
        let prev = this.tail;
        while (count > 0) {
            if (current.value === element) {
                if (this.size === 1) {
                    this.tail = null;
                    this.size = 0;
                    return;
                }
                prev.next = current.next;
                if (current === this.tail.next) {
                    this.tail.next = current.next;
                }
                if (current === this.tail) {
                    this.tail = prev;
                }
                this.size--;
                current = prev.next;
                count--;
            } else {
                prev = current;
                current = current.next;
                count--;
            }
        }
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Invalid index');
        }
        let current = this.tail.next;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.value;
    }

    clone() {
        const newList = new CircularSinglyLinkedList();
        if (this.size === 0) return newList;
        let current = this.tail.next;
        for (let i = 0; i < this.size; i++) {
            newList.append(current.value);
            current = current.next;
        }
        return newList;
    }

    reverse() {
        if (this.size < 2) return;
        let prev = this.tail;
        let current = this.tail.next;
        for (let i = 0; i < this.size; i++) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.tail = this.tail.next;
    }

    findFirst(element) {
        if (this.size === 0) return -1;
        let current = this.tail.next;
        for (let i = 0; i < this.size; i++) {
            if (current.value === element) return i;
            current = current.next;
        }
        return -1;
    }

    findLast(element) {
        if (this.size === 0) return -1;
        let index = -1;
        let current = this.tail.next;
        for (let i = 0; i < this.size; i++) {
            if (current.value === element) index = i;
            current = current.next;
        }
        return index;
    }

    clear() {
        this.tail = null;
        this.size = 0;
    }
}

module.exports = CircularSinglyLinkedList;
