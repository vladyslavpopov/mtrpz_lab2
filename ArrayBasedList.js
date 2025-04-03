class ArrayBasedList {
    constructor() {
        /** @type {string[]} */
        this.items = [];
    }

    length() {
        return this.items.length;
    }
}

module.exports = ArrayBasedList;
