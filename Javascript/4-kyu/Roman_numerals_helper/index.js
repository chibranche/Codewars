const RomanNumerals = {
    toRoman: (nb) => {
        const table = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

        let res = ''
        for (i in table) {
            while (nb >= table[i]) {
                res += i;
                nb -= table[i];
            }
        }
        return res
    },

    fromRoman: (nb) => {
        const table = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

        const arr = nb.split('')

        let res = 0
        let currentValue
        let nextValue

        for (let i = 0; i < arr.length; i++) {
            currentValue = table[arr[i]]
            nextValue = table[arr[i + 1]]

            if (currentValue < nextValue) {
                res -= currentValue
            }
            else {
                res += currentValue
            }
        }

        return res
    }
}