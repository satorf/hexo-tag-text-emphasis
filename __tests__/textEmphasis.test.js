const getStyle = require('../lib/textEmphasis')

describe('getStyle', function() {
  it('should return a function, which returns a string of html em tag having class name "text-emphasis" and assigned text-emphasis-style, and having inline style which resets font-style and adds assigned text-emphasis-style', () => {
    const hexoMock = { config: {} }
    const content = 'content text'

    expect(getStyle(hexoMock)([], content)).toBe(
      '<em class="text-emphasis sesame" style="font-style: inherit; text-emphasis-style: sesame; -webkit-text-emphasis-style: sesame;">content text</em>',
    )

    expect(getStyle(hexoMock)(['open'], content)).toBe(
      '<em class="text-emphasis open" style="font-style: inherit; text-emphasis-style: open; -webkit-text-emphasis-style: open;">content text</em>',
    )

    expect(getStyle(hexoMock)(['filled', 'triangle'], content)).toBe(
      '<em class="text-emphasis filled triangle" style="font-style: inherit; text-emphasis-style: filled triangle; -webkit-text-emphasis-style: filled triangle;">content text</em>',
    )
  })

  it('should return a function, which returns a string of html em tag having only class name "text-emphasis" and assigned text-emphasis-style when config.text_emphasis.inline_style is false', () => {
    const hexoMock = {
      config: {
        text_emphasis: {
          inline_style: false,
        },
      },
    }
    const content = 'content text'

    expect(getStyle(hexoMock)([], content)).toBe(
      '<em class="text-emphasis sesame">content text</em>',
    )
    expect(getStyle(hexoMock)(['dot'], content)).toBe(
      '<em class="text-emphasis dot">content text</em>',
    )
    expect(getStyle(hexoMock)(['open', 'double-circle'], content)).toBe(
      '<em class="text-emphasis open double-circle">content text</em>',
    )
  })
})
