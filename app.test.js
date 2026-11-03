const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./app');

test('Addition of two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
});