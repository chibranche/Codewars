function ipsBetween(start, end) {
    let rangeArray = []
    let startAdresses = start.split(".")
    let endAdresses = end.split(".")

    for (let i = 0; i < 4; i++) {
        rangeArray.push(endAdresses[i] - startAdresses[i])
    }

    return (
        rangeArray[3] +
        256 * rangeArray[2] +
        (256 ** 2) * rangeArray[1] +
        (256 ** 3) * rangeArray[0]
    )
}