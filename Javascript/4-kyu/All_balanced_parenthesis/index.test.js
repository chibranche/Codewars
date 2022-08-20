describe("All Balanced Parentheses", () => {
    it("Example Tests", () => {
        Test.assertDeepEquals(balancedParens(0).sort(), [""]);
        Test.assertDeepEquals(balancedParens(1).sort(), ["()"]);
        Test.assertDeepEquals(balancedParens(2).sort(), ["(())", "()()"]);
        Test.assertDeepEquals(balancedParens(3).sort(), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
        Test.assertDeepEquals(balancedParens(4).sort(), ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]);
    });
});