import calc from '../src/calc'

test('The difference between 2021-01 and 2020-01 is 12 months', () => {
    expect(calc('2021-01', '2020-01')).toBe(12)
})
test('The difference between 2020-09 and 2021-01 is 4 months', () => {
    expect(calc('2020-09', '2021-01')).toBe(4)
})
test('The difference between 2046-09 and 1995-01 is 620 months', () => {
    expect(calc('2046-09', '1995-01')).toBe(620)
})
