// *** IMPORTS ***
import { julDay, getFrac } from './utils'

// This simply mods the difference between the date and a known new moon date (1970-01-07) by the length of the lunar period.
// For this reason, it is only valid from 1970 onwards.
export const Simple = (day: number, month: number, year: number): number => {
    const lp = 2551443
    const now = new Date(year, month - 1, day, 20, 35, 0)
    const new_moon = new Date(1970, 0, 7, 20, 35, 0)
    const phase = ((now.getTime() - new_moon.getTime()) / 1000) % lp
    return Math.floor(phase / (24 * 3600))
}

// This is based on a 'do it in your head' algorithm by John Conway.
// In its current form, it's only valid for the 20th and 21st centuries, but I'm sure John's got refinements. :)
export const Conway = (day: number, month: number, year: number): number => {
    let phase = year % 100

    phase %= 19
    if (phase > 9) {
        phase -= 19
    }

    phase = ((phase * 11) % 30) + month + day
    if (month < 3) {
        phase += 2
    }

    phase -= year < 2000 ? 4 : 8.3
    phase = Math.floor(phase + 0.5) % 30

    return phase < 0 ? phase + 30 : phase
}

// This is based on some Basic code by Roger W. Sinnot from Sky & Telescope magazine, March 1985.
// I don't pretend to understand it - something to do with a first-order approximation to the 'real' calculation of the position of the bodies involved
export const Sinnot = (day: number, month: number, year: number): number => {
    const thisJD = julDay(day, month, year)
    const degToRad = 3.14159265 / 180
    const K0: number = Math.floor((year - 1900) * 12.3685)
    const T = (year - 1899.5) / 100
    const T2 = T * T
    const T3 = T * T * T
    const J0 = 2415020 + 29 * K0
    const F0 =
        0.0001178 * T2 -
        0.000000155 * T3 +
        (0.75933 + 0.53058868 * K0) -
        (0.000837 * T + 0.000335 * T2)
    const M0 = 360 * getFrac(K0 * 0.08084821133) + 359.2242 - 0.0000333 * T2 - 0.00000347 * T3
    const M1 = 360 * getFrac(K0 * 0.07171366128) + 306.0253 + 0.0107306 * T2 + 0.00001236 * T3
    const B1 = 360 * getFrac(K0 * 0.08519585128) + 21.2964 - 0.0016528 * T2 - 0.00000239 * T3
    let oldJ = 0
    let phase = 0
    let jDay = 0
    while (jDay < thisJD) {
        let F = F0 + 1.530588 * phase
        const M5 = (M0 + phase * 29.10535608) * degToRad
        const M6 = (M1 + phase * 385.81691806) * degToRad
        const B6 = (B1 + phase * 390.67050646) * degToRad
        F -= 0.4068 * Math.sin(M6) + (0.1734 - 0.000393 * T) * Math.sin(M5)
        F += 0.0161 * Math.sin(2 * M6) + 0.0104 * Math.sin(2 * B6)
        F -= 0.0074 * Math.sin(M5 - M6) - 0.0051 * Math.sin(M5 + M6)
        F += 0.0021 * Math.sin(2 * M5) + 0.001 * Math.sin(2 * B6 - M6)
        F += 0.5 / 1440
        oldJ = jDay
        jDay = J0 + 28 * phase + Math.floor(F)
        phase++
    }
    return (thisJD - oldJ) % 30
}
