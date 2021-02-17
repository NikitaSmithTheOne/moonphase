// The function calculates the Julian Date (which begins at noon) for the specified date
export const julDay = (day: number, month: number, year: number): number => {
    let jy = year
    let jm = month + 1

    if (month <= 2) {
        jy--
        jm += 12
    }
    let jul = Math.floor(365.25 * jy) + Math.floor(30.6001 * jm) + day + 1720995
    if (day + 31 * (month + 12 * year) >= 15 + 31 * (10 + 12 * 1582)) {
        const ja = Math.floor(0.01 * jy)
        jul = jul + 2 - ja + Math.floor(0.25 * ja)
    }
    return jul
}

export const getFrac = (fr: number): number => {
    return fr - Math.floor(fr)
}
