// Your task is to sum the differences between consecutive pairs in the array in descending order.
// [2, 1, 10]  -> [10, 2, 1] -> (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr) {
    let count = 0
    const descOrder = arr.sort((a, b) => a < b ? 1 : -1)

    for (let i = 0; i < arr.length - 1; i++) {
        count += descOrder[i] - descOrder[i + 1]
    }

    return count
}