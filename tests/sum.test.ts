import sum from '../src/sum'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})
test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
})
test('adds 11 + 29 to equal 40', () => {
    expect(sum(11, 29)).toBe(40);
})