// 2*n steps where you go down the tree of possibilities 
// Analyse an incomplete pattern : 
// if already n opening, only do closing
// if at any step you have as many opening and closing, open
// else you are at a branching path, you can do both 
// 
// At the end of a step, filter for uniqueness

// NOTE : This solution will produce a timeout a n=7

function balancedParens(n) {
    let arr = ['']

    for (let i = 0; i < 2 * n; i++) {
        let newArr = []
        for (let item of arr) {
            //count parenthesis
            const openingParenthesisNb = (item.match(/\(/g) || []).length
            const closingParenthesisNb = (item.match(/\)/g) || []).length

            if (openingParenthesisNb === closingParenthesisNb) {
                newArr.push(item + '(')
            }
            else if (openingParenthesisNb === n) {
                newArr.push(item + ')')
            }
            else {
                newArr.push(item + '(')
                newArr.push(item + ')')
            }
        }

        //filter for uniqueness
        newArr = newArr.filter((value, index, self) => {
            return self.indexOf(value) === index;
        })

        arr = newArr
    }

    return arr;
}