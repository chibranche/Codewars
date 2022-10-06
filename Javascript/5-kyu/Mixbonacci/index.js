function mixbonacci(pattern, length) {
    // Keep the index of how many time we went through each sequence
    let indexes = {
        fib: 0,
        pad: 0,
        pel: 0,
        jac: 0,
        tri: 0,
        tet: 0
    }

    // Initialize with some values
    let fibArr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
    let pelArr = [0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860, 33461, 80782, 195025, 470832, 1136689, 2744210, 6625109, 15994428, 38613965, 93222358, 225058681, 543339720, 1311738121, 3166815962, 7645370045, 18457556052, 44560482149, 107578520350, 259717522849]
    let padArr = [1, 0, 0, 1, 0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28, 37, 49, 65, 86, 114, 151, 200, 265, 351, 465, 616, 816, 1081, 1432, 1897, 2513, 3329, 4410, 5842, 7739, 10252, 13581, 17991, 23833, 31572, 41824, 55405, 73396, 97229, 128801, 170625]
    let jacArr = [0, 1, 1, 3, 5, 11, 21, 43, 85, 171, 341, 683, 1365, 2731, 5461, 10923, 21845, 43691, 87381, 174763, 349525, 699051, 1398101, 2796203, 5592405, 11184811, 22369621, 44739243, 89478485, 178956971, 357913941, 715827883, 1431655765, 2863311531, 5726623061]
    let triArr = [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890, 66012, 121415, 223317, 410744, 755476, 1389537, 2555757, 4700770, 8646064, 15902591, 29249425, 53798080, 98950096, 181997601, 334745777, 615693474, 1132436852]
    let tetArr = [0, 0, 0, 1, 1, 2, 4, 8, 15, 29, 56, 108, 208, 401, 773, 1490, 2872, 5536, 10671, 20569, 39648, 76424, 147312, 283953, 547337, 1055026, 2033628, 3919944, 7555935, 14564533, 28074040, 54114452, 104308960, 201061985, 387559437, 747044834, 1439975216, 2775641472]


    let arr = []

    // We define recursively each of the sequences
    // To avoid calculating each time all values, we store in array, and we just add the next value whenever needed
    const fibonacci = (i) => {
        if (fibArr.length > i) {
            return fibArr[i]
        }
        const res = fibonacci(i - 1) + fibonacci(i - 2)
        fibArr.push(res)
        return res
    }

    const padovan = (i) => {
        console.log("pad", i, padArr.length)
        if (padArr.length > i) {
            return padArr[i]
        }
        const res = (padovan(i - 2) + padovan(i - 3))
        padArr.push(res)
        return res
    }

    const pell = (i) => {
        if (pelArr.length > i) {
            return pelArr[i]
        }
        const res = 2 * pell(i - 1) + pell(i - 2)
        pelArr.push(res)
        return res
    }

    const jacobstahl = (i) => {
        if (jacArr.length > i) {
            return jacArr[i]
        }
        const res = jacobstahl(i - 1) + 2 * jacobstahl(i - 2)
        jacArr.push(res)
        return res
    }

    const tribonacci = (i) => {
        if (triArr.length > i) {
            return triArr[i]
        }
        const res = tribonacci(i - 1) + tribonacci(i - 2) + tribonacci(i - 3)
        triArr.push(res)
        return res
    }

    const tetranacci = (i) => {
        if (tetArr.length > i) {
            return tetArr[i]
        }
        const res = tetranacci(i - 1) + tetranacci(i - 2) + tetranacci(i - 3) + tetranacci(i - 4)
        tetArr.push(res)
        return res
    }

    // Then we go through the pattern and call the right function
    // We add the values to the array then return the array
    for (let i = 0; i < length; i++) {
        let nextIndex = i % pattern.length
        switch (pattern[nextIndex]) {
            case "fib":
                const resfib = fibonacci(indexes.fib)
                arr.push(resfib)
                indexes.fib = indexes.fib + 1
                break

            case 'pad':
                const respad = padovan(indexes.pad)
                arr.push(respad)
                indexes.pad = indexes.pad + 1
                break

            case 'pel':
                const respel = pell(indexes.pel)
                arr.push(respel)
                indexes.pel = indexes.pel + 1
                break

            case "jac":
                const resjac = jacobstahl(indexes.jac)
                arr.push(resjac)
                indexes.jac = indexes.jac + 1
                break

            case "tri":
                const restri = tribonacci(indexes.tri)
                arr.push(restri)
                indexes.tri = indexes.tri + 1
                break

            case "tet":
                const restet = tetranacci(indexes.tet)
                arr.push(restet)
                indexes.tet = indexes.tet + 1
                break

            default:
            //Do nothing
        }
    }

    return arr;
}