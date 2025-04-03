const assert = require('assert');
const ArrayBasedList = require('./ArrayBasedList');
const CircularSinglyLinkedList = require('./CircularSinglyLinkedList');

function runListTests(listName, ListClass) {
    console.log(`Testing ${listName}...`);
    let list = new ListClass();

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

    list.reverse(); // Expected list becomes: C, D
    assert.strictEqual(list.get(0), 'C', 'reverse() is not working correctly');

    list.append('D'); // Expected list: C, D, D
    assert.strictEqual(list.findFirst('D'), 1, 'findFirst() is not working correctly');
    assert.strictEqual(list.findLast('D'), 2, 'findLast() is not working correctly');

    list.clear();
    assert.strictEqual(list.length(), 0, 'clear() is not working correctly');

    const list1 = new ListClass();
    list1.append('X');
    list1.append('Y');
    const list2 = new ListClass();
    list2.append('Z');
    list1.extend(list2);
    assert.strictEqual(list1.length(), 3, 'extend() is not working correctly');
    list2.clear();
    assert.strictEqual(list1.length(), 3, 'extend() did not create an independent copy');

    // This test is intentionally failing to demonstrate CI failure
    assert.strictEqual(1 + 1, 3, 'Intentional failure for CI demonstration');

    console.log(`${listName} passed all tests.`);
}

try {
    runListTests("ArrayBasedList", ArrayBasedList);
    runListTests("CircularSinglyLinkedList", CircularSinglyLinkedList);
    console.log("All tests passed successfully.");
} catch (error) {
    console.error("Test failed:", error.message);
    process.exit(1);
}
