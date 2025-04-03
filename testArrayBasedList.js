const assert = require('assert');
const ArrayBasedList = require('./ArrayBasedList');

(function testArrayBasedList() {
    console.log('Testing ArrayBasedList...');
    const list = new ArrayBasedList();

    list.append('A');
    list.append('B');
    list.append('C');
    assert.strictEqual(list.length(), 3, 'append() or length() are not working correctly');
})();
