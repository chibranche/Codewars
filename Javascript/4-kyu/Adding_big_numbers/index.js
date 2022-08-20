function add(a, b) {
    let rest = false
    let aArr = a.split("").reverse()
    let bArr = b.split("").reverse()

    const longestLength = Math.max(aArr.length, bArr.length)

    let resultArr = []

    for (let i = 0; i < longestLength; i++) {

        const firstTerm = (aArr.length > i ? parseInt(aArr[i]) : 0)
        const secondTerm = (bArr.length > i ? parseInt(bArr[i]) : 0)

        let r = (firstTerm + secondTerm + (rest ? 1 : 0)).toString()

        rest = r.length > 1

        resultArr.push(i === longestLength - 1 ? r : r[r.length - 1])
    }

    resultArr = resultArr.reverse().join("")

    return resultArr;
}