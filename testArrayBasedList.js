const assert = require('assert');
const ArrayBasedList = require('./ArrayBasedList');

(function testArrayBasedList() {
    console.log('Testing ArrayBasedList...');
    const list = new ArrayBasedList();

    list.append('A');
    list.append('B');
    list.append('C');
    assert.strictEqual(list.length(), 3, 'append() or length() are not working correctly');

    list.insert('D', 1); // Expected list: A, D, B, C
    assert.strictEqual(list.get(1), 'D', 'insert() is not working correctly');

    const deleted = list.delete(2); // Removing 'B'; expected list: A, D, C
    assert.strictEqual(deleted, 'B', 'delete() is not working correctly');
    assert.strictEqual(list.length(), 3, 'delete() did not update the list length correctly');

    list.append('A'); // Expected list: A, D, C, A
    list.deleteAll('A'); // Expected list: D, C
    assert.strictEqual(list.length(), 2, 'deleteAll() is not working correctly');
    assert.strictEqual(list.findFirst('A'), -1, 'deleteAll() did not remove all occurrences');

    const cloneList = list.clone();
    cloneList.append('E');
    assert.strictEqual(list.length(), 2, 'clone() creates a dependent copy');
})();
