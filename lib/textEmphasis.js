/*!
 * hexo-tag-text-emphasis
 * Copyright (c) 2017 satorf, released under the MIT LICENSE:
 * https://github.com/satorf/hexo-tag-text-emphasis/blob/master/LICENSE
 */

const getStyle = require('./getStyle')

module.exports = hexo => (args, content) => {
  const config = hexo.config.text_emphasis || {}
  const style = getStyle(args)

  if (config.inline_style === false) {
    return `<em class="text-emphasis ${style}">${content}</em>`
  }

  return `<em class="text-emphasis ${style}" style="font-style: inherit; text-emphasis-style: ${style};">${content}</em>`
}
