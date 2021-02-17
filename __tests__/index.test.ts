// *** IMPORTS ***
import { Simple, Conway, Sinnot } from '../src'

// *** HELPERS ***
type getDatesRangeReturnType = Array<[day: number, month: number, year: number]>
const getDatesRange = (): getDatesRangeReturnType => {
    const endDate = new Date(2100, 0, 1)
    const startDate = new Date(1971, 0, 1)
    const daysOfYear: getDatesRangeReturnType = []

    for (
        const currentDate = startDate;
        currentDate <= endDate;
        currentDate.setDate(currentDate.getDate() + 1)
    ) {
        const day = currentDate.getUTCDate()
        const month = currentDate.getUTCMonth() + 1
        const year = currentDate.getUTCFullYear()
        daysOfYear.push([day, month, year])
    }

    return daysOfYear
}

// *** TESTS ***
describe('[Simple] tests', () => {
    it('Phase calculation check', () => {
        expect(Simple(13, 1, 2021)).toEqual(0)
        expect(Simple(14, 1, 2021)).toEqual(1)
        expect(Simple(15, 1, 2021)).toEqual(2)
        expect(Simple(16, 1, 2021)).toEqual(3)
        expect(Simple(17, 1, 2021)).toEqual(4)
        expect(Simple(18, 1, 2021)).toEqual(5)
        expect(Simple(19, 1, 2021)).toEqual(6)
        expect(Simple(20, 1, 2021)).toEqual(7)
        expect(Simple(21, 1, 2021)).toEqual(8)
        expect(Simple(22, 1, 2021)).toEqual(9)
        expect(Simple(23, 1, 2021)).toEqual(10)
        expect(Simple(24, 1, 2021)).toEqual(11)
        expect(Simple(25, 1, 2021)).toEqual(12)
        expect(Simple(26, 1, 2021)).toEqual(13)
        expect(Simple(27, 1, 2021)).toEqual(14)
        expect(Simple(28, 1, 2021)).toEqual(15)
        expect(Simple(29, 1, 2021)).toEqual(16)
        expect(Simple(30, 1, 2021)).toEqual(17)
        expect(Simple(31, 1, 2021)).toEqual(18)
        expect(Simple(1, 2, 2021)).toEqual(19)
        expect(Simple(2, 2, 2021)).toEqual(20)
        expect(Simple(3, 2, 2021)).toEqual(21)
        expect(Simple(4, 2, 2021)).toEqual(22)
        expect(Simple(5, 2, 2021)).toEqual(23)
        expect(Simple(6, 2, 2021)).toEqual(24)
        expect(Simple(7, 2, 2021)).toEqual(25)
        expect(Simple(8, 2, 2021)).toEqual(26)
        expect(Simple(9, 2, 2021)).toEqual(27)
        expect(Simple(10, 2, 2021)).toEqual(28)
        expect(Simple(11, 2, 2021)).toEqual(29)
    })

    it('Phase range check', () => {
        const datesArray = getDatesRange()

        datesArray.forEach((date) => {
            const result = Simple(...date)

            expect(result).toBeGreaterThanOrEqual(0)
            expect(result).toBeLessThanOrEqual(29)
            expect(result === 0 || result % 1 === 0).toBeTruthy()
        })
    })
})

describe('[Conway] tests', () => {
    it('Phase calculation check', () => {
        expect(Conway(13, 1, 2021)).toEqual(0)
        expect(Conway(14, 1, 2021)).toEqual(1)
        expect(Conway(15, 1, 2021)).toEqual(2)
        expect(Conway(16, 1, 2021)).toEqual(3)
        expect(Conway(17, 1, 2021)).toEqual(4)
        expect(Conway(18, 1, 2021)).toEqual(5)
        expect(Conway(19, 1, 2021)).toEqual(6)
        expect(Conway(20, 1, 2021)).toEqual(7)
        expect(Conway(21, 1, 2021)).toEqual(8)
        expect(Conway(22, 1, 2021)).toEqual(9)
        expect(Conway(23, 1, 2021)).toEqual(10)
        expect(Conway(24, 1, 2021)).toEqual(11)
        expect(Conway(25, 1, 2021)).toEqual(12)
        expect(Conway(26, 1, 2021)).toEqual(13)
        expect(Conway(27, 1, 2021)).toEqual(14)
        expect(Conway(28, 1, 2021)).toEqual(15)
        expect(Conway(29, 1, 2021)).toEqual(16)
        expect(Conway(30, 1, 2021)).toEqual(17)
        expect(Conway(31, 1, 2021)).toEqual(18)
        expect(Conway(1, 2, 2021)).toEqual(19)
        expect(Conway(2, 2, 2021)).toEqual(20)
        expect(Conway(3, 2, 2021)).toEqual(21)
        expect(Conway(4, 2, 2021)).toEqual(22)
        expect(Conway(5, 2, 2021)).toEqual(23)
        expect(Conway(6, 2, 2021)).toEqual(24)
        expect(Conway(7, 2, 2021)).toEqual(25)
        expect(Conway(8, 2, 2021)).toEqual(26)
        expect(Conway(9, 2, 2021)).toEqual(27)
        expect(Conway(10, 2, 2021)).toEqual(28)
        expect(Conway(11, 2, 2021)).toEqual(29)
    })

    it('Phase range check', () => {
        const datesArray = getDatesRange()

        datesArray.forEach((date) => {
            const result = Conway(...date)

            expect(result).toBeGreaterThanOrEqual(0)
            expect(result).toBeLessThanOrEqual(29)
            expect(result === 0 || result % 1 === 0).toBeTruthy()
        })
    })
})

describe('[Sinnot] tests', () => {
    it('Phase calculation check', () => {
        expect(Sinnot(13, 1, 2021)).toEqual(1)
        expect(Sinnot(14, 1, 2021)).toEqual(2)
        expect(Sinnot(15, 1, 2021)).toEqual(3)
        expect(Sinnot(16, 1, 2021)).toEqual(4)
        expect(Sinnot(17, 1, 2021)).toEqual(5)
        expect(Sinnot(18, 1, 2021)).toEqual(6)
        expect(Sinnot(19, 1, 2021)).toEqual(7)
        expect(Sinnot(20, 1, 2021)).toEqual(8)
        expect(Sinnot(21, 1, 2021)).toEqual(9)
        expect(Sinnot(22, 1, 2021)).toEqual(10)
        expect(Sinnot(23, 1, 2021)).toEqual(11)
        expect(Sinnot(24, 1, 2021)).toEqual(12)
        expect(Sinnot(25, 1, 2021)).toEqual(13)
        expect(Sinnot(26, 1, 2021)).toEqual(14)
        expect(Sinnot(27, 1, 2021)).toEqual(15)
        expect(Sinnot(28, 1, 2021)).toEqual(16)
        expect(Sinnot(29, 1, 2021)).toEqual(17)
        expect(Sinnot(30, 1, 2021)).toEqual(18)
        expect(Sinnot(31, 1, 2021)).toEqual(19)
        expect(Sinnot(1, 2, 2021)).toEqual(20)
        expect(Sinnot(2, 2, 2021)).toEqual(21)
        expect(Sinnot(3, 2, 2021)).toEqual(22)
        expect(Sinnot(4, 2, 2021)).toEqual(23)
        expect(Sinnot(5, 2, 2021)).toEqual(24)
        expect(Sinnot(6, 2, 2021)).toEqual(25)
        expect(Sinnot(7, 2, 2021)).toEqual(26)
        expect(Sinnot(8, 2, 2021)).toEqual(27)
        expect(Sinnot(9, 2, 2021)).toEqual(28)
        expect(Sinnot(10, 2, 2021)).toEqual(29)
    })

    it('Phase range check', () => {
        const datesArray = getDatesRange()

        datesArray.forEach((date) => {
            const result = Sinnot(...date)

            expect(result).toBeGreaterThanOrEqual(0)
            expect(result).toBeLessThanOrEqual(29)
            expect(result === 0 || result % 1 === 0).toBeTruthy()
        })
    })
})
