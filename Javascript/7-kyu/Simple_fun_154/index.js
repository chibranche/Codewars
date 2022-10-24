function zeroAndOne(s) {
    let arr = s.split("")
    let revArr = arr.reverse()

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1] && arr[i] !== " " && arr[i + 1] !== " ") {
            arr.splice(i, 2, " ")
        }
        if (revArr[i] !== revArr[i + 1] && revArr[i] !== " " && revArr[i + 1] !== " ") {

            revArr.splice(i, 2, " ")
        }
    }

    arr = arr.filter(i => i !== " ")
    revArr = revArr.filter(i => i !== " ")

    return (Math.min(arr.length, revArr.length))
}