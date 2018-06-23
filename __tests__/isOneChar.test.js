const isOneChar = require('../lib/isOneChar')

describe('isOneChar', function() {
  it('should return true when passed a single character string', () => {
    expect(isOneChar('a')).toBe(true)

    // surrogate pair
    expect(isOneChar('𠮷')).toBe(true)

    // emoji
    expect(isOneChar('😜')).toBe(true)
  })

  it('should return false when passed a multiple character string', () => {
    expect(isOneChar('hoge')).toBe(false)

    // contains surrogate pair
    expect(isOneChar('𠮷野家')).toBe(false)
  })

  it('should return false when passed an empty string', () => {
    expect(isOneChar('')).toBe(false)
  })
})
