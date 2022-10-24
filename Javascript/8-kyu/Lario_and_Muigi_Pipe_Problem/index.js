function pipeFix(numbers) {
    const firstVal = numbers[0]
    const lastVal = numbers[numbers.length - 1]

    let arr = []
    for (let i = firstVal; i <= lastVal; i++) {
        arr.push(i)
    }

    return arr
}