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
}

module.exports = CircularSinglyLinkedList;
