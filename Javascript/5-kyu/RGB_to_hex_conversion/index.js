function rgb(r, g, b) {
    r = Math.max(Math.round(r), 0)
    g = Math.max(Math.round(g), 0)
    b = Math.max(Math.round(b), 0)

    r = Math.min(r, 255)
    g = Math.min(g, 255)
    b = Math.min(b, 255)

    const convertToRgb = (nb) => {
        let hex = nb.toString(16)
        if (hex.length === 1) {
            return "0" + hex.toUpperCase()
        }
        return hex.toUpperCase()
    }

    return convertToRgb(r) + convertToRgb(g) + convertToRgb(b)
}