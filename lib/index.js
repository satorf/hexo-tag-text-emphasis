/*!
 * hexo-tag-text-emphasis
 * Copyright (c) 2017 satorf, released under the MIT LICENSE:
 * https://github.com/satorf/hexo-tag-text-emphasis/blob/master/LICENSE
 */

const textEmphasis = require('./textEmphasis')

/* globals hexo: false */
hexo.extend.tag.register('text_emphasis', textEmphasis(hexo), true)
