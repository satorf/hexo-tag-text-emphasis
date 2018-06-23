const assert = require('power-assert')

const getStyle = require('../lib/getStyle')

describe('getStyle', function() {
  it('should return "sesame" by default empty array passed', function() {
    assert(getStyle([]) === 'sesame')
  })

  it('should return the result of joining keywords with spaces in between when passed array of keyword values', function() {
    assert(getStyle(['open']) === 'open')
    assert(getStyle(['double-circle']) === 'double-circle')
    assert(getStyle(['filled', 'dot']) === 'filled dot')
    assert(getStyle(['sesame', 'open']) === 'open sesame')
  })

  it("should return a string of a character wrapped in single-quotes(') when passed array contains only a single character string", function() {
    assert(getStyle(['*']) === "'*'")
    assert(getStyle(['🍩']) === "'🍩'")
  })

  it('should use keywords when passed array contains both keywords and a single character string', function() {
    assert(getStyle(['triangle', '*']) === 'triangle')
    assert(getStyle(['🍩', 'open']) === 'open')
    assert(getStyle(['dot', '🍩', 'open']) === 'open dot')
  })

  it('should use first one when passed array contains two or more same type keywords value', function() {
    assert(getStyle(['open', 'filled']) === 'open')
    assert(getStyle(['filled', 'open']) === 'filled')

    assert(getStyle(['double-circle', 'circle']) === 'double-circle')

    assert(getStyle(['filled', 'open', 'dot']) === 'filled dot')

    assert(getStyle(['triangle', 'open', 'dot']) === 'open triangle')

    assert(
      getStyle(['triangle', 'filled', 'open', 'dot']) === 'filled triangle',
    )

    assert(getStyle(['circle', 'double-circle', 'dot']) === 'circle')

    assert(
      getStyle(['open', 'filled', 'triangle', 'open', 'circle', 'sesame']) ===
        'open triangle',
    )
  })

  it('should ignore invalid strings', function() {
    assert(getStyle(['hoge', 'fuga']) === 'sesame')

    assert(getStyle(['hoge', 'fuga', 'filled']) === 'filled')
    assert(getStyle(['triangle', 'hoge', 'fuga']) === 'triangle')
    assert(getStyle(['circle', 'hoge', 'open', 'fuga']) === 'open circle')

    assert(getStyle(['hoge', '*', 'fuga']) === "'*'")

    assert(getStyle(['hoge', '*', 'fuga', 'double-circle']) === 'double-circle')

    assert(getStyle(['hoge', 'dot', 'fuga', 'double-circle']) === 'dot')
  })
})
