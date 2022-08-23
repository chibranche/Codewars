function formatDuration(seconds) {
    if (seconds === 0) {
        return "now"
    }

    let secondsRemain = seconds
    let resArray = []

    //   Year
    const years = Math.floor(secondsRemain / 31536000)
    if (years > 0) {
        resArray.push(`${years} year${years > 1 ? "s" : ""}`)
    }

    secondsRemain = secondsRemain % 31536000

    //   Day
    const days = Math.floor(secondsRemain / 86400)
    if (days > 0) {
        resArray.push(`${days} day${days > 1 ? "s" : ""}`)
    }

    secondsRemain = secondsRemain % 86400

    //   Hour
    const hours = Math.floor(secondsRemain / 3600)
    if (hours > 0) {
        resArray.push(`${hours} hour${hours > 1 ? "s" : ""}`)
    }

    secondsRemain = secondsRemain % 3600

    //   Minute
    const minutes = Math.floor(secondsRemain / 60)
    if (minutes > 0) {
        resArray.push(`${minutes} minute${minutes > 1 ? "s" : ""}`)
    }
    secondsRemain = secondsRemain % 60

    //   Second
    const secs = secondsRemain
    if (secs > 0) {
        resArray.push(`${secs} second${secs > 1 ? "s" : ""}`)
    }

    // Assemble string
    let res = ""
    for (let i = 0; i < resArray.length; i++) {
        res = res + resArray[i]
        if (i === resArray.length - 2) {
            res = res + " and "
        }
        else if (i < resArray.length - 2) {
            res = res + ", "
        }
    }

    return res
}
