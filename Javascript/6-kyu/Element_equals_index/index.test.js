describe("Element equals its index", () => {
    it("example tests", () => {
        Test.assertEquals(indexEqualsValue([-8, 0, 2, 5]), 2);
        Test.assertEquals(indexEqualsValue([-1, 0, 3, 6]), -1);
        Test.assertEquals(indexEqualsValue([-3, 0, 1, 3, 10]), 3);
        Test.assertEquals(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]), 1);
        Test.assertEquals(indexEqualsValue([9, 10, 11, 12, 13, 14]), -1);
        Test.assertEquals(indexEqualsValue([0]), 0);
    });
});