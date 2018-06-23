const getStyle = require('../lib/getStyle')

describe('getStyle', function() {
  it('should return "sesame" by default empty array passed', () => {
    expect(getStyle([])).toBe('sesame')
  })

  it('should return the result of joining keywords with spaces in between when passed array of keyword values', () => {
    expect(getStyle(['open'])).toBe('open')
    expect(getStyle(['double-circle'])).toBe('double-circle')
    expect(getStyle(['filled', 'dot'])).toBe('filled dot')
    expect(getStyle(['sesame', 'open'])).toBe('open sesame')
  })

  it("should return a string of a character wrapped in single-quotes(') when passed array contains only a single character string", () => {
    expect(getStyle(['*'])).toBe("'*'")
    expect(getStyle(['🍩'])).toBe("'🍩'")
  })

  it('should use keywords when passed array contains both keywords and a single character string', () => {
    expect(getStyle(['triangle', '*'])).toBe('triangle')
    expect(getStyle(['🍩', 'open'])).toBe('open')
    expect(getStyle(['dot', '🍩', 'open'])).toBe('open dot')
  })

  it('should use first one when passed array contains two or more same type keywords value', () => {
    expect(getStyle(['open', 'filled'])).toBe('open')
    expect(getStyle(['filled', 'open'])).toBe('filled')

    expect(getStyle(['double-circle', 'circle'])).toBe('double-circle')

    expect(getStyle(['filled', 'open', 'dot'])).toBe('filled dot')

    expect(getStyle(['triangle', 'open', 'dot'])).toBe('open triangle')

    expect(getStyle(['triangle', 'filled', 'open', 'dot'])).toBe(
      'filled triangle',
    )

    expect(getStyle(['circle', 'double-circle', 'dot'])).toBe('circle')

    expect(
      getStyle(['open', 'filled', 'triangle', 'open', 'circle', 'sesame']),
    ).toBe('open triangle')
  })

  it('should ignore invalid strings', () => {
    expect(getStyle(['hoge', 'fuga'])).toBe('sesame')

    expect(getStyle(['hoge', 'fuga', 'filled'])).toBe('filled')
    expect(getStyle(['triangle', 'hoge', 'fuga'])).toBe('triangle')
    expect(getStyle(['circle', 'hoge', 'open', 'fuga'])).toBe('open circle')

    expect(getStyle(['hoge', '*', 'fuga'])).toBe("'*'")

    expect(getStyle(['hoge', '*', 'fuga', 'double-circle'])).toBe(
      'double-circle',
    )

    expect(getStyle(['hoge', 'dot', 'fuga', 'double-circle'])).toBe('dot')
  })
})
