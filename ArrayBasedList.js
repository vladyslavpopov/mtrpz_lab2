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
}

module.exports = ArrayBasedList;
