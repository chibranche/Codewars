const strictEqual = require('chai').assert.strictEqual;

function doTest(input, expected) {
    const actual = zeroAndOne(input);
    strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Tests suite", function () {
    it("It should work for basic tests.", function () {
        doTest("01010", 1);
        doTest("11101111", 6);
        doTest("01", 0);
        doTest("10", 0);
        doTest("110110", 2);
        doTest("110100", 2);
    });
});