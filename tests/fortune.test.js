/**
 * @jest-environment jsdom
 */
const {load, roll, add} = require("../js/fortune.js");

test("Add 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
});