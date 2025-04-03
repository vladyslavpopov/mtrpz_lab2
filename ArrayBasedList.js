class ArrayBasedList {
    constructor() {
        /** @type {string[]} */
        this.items = [];
    }

    length() {
        return this.items.length;
    }

    append(element) {
        if (typeof element !== 'string' || element.length !== 1) {
            throw new Error('Element must be a single character.');
        }
        this.items.push(element);
    }

    insert(element, index) {
        if (typeof element !== 'string' || element.length !== 1) {
            throw new Error('Element must be a single character.');
        }
        if (index < 0 || index > this.items.length) {
            throw new Error('Invalid index');
        }
        this.items.splice(index, 0, element);
    }

    delete(index) {
        if (index < 0 || index >= this.items.length) {
            throw new Error('Invalid index');
        }
        return this.items.splice(index, 1)[0];
    }
}

module.exports = ArrayBasedList;
