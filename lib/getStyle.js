/*!
 * hexo-tag-text-emphasis
 * Copyright (c) 2017 satorf, released under the MIT LICENSE:
 * https://github.com/satorf/hexo-tag-text-emphasis/blob/master/LICENSE
 */

const isOneChar = require('./isOneChar');

const types = [
  'filled',
  'open',
];
const shapes = [
  'dot',
  'circle',
  'double-circle',
  'triangle',
  'sesame',
];
const keywords = [
  'none',
  ...types,
  ...shapes,
];

const DEFAULT_STYLE = 'sesame';

module.exports = (args) => {
  // ignore invalid values
  const styles = args.filter(arg => keywords.includes(arg) || isOneChar(arg));

  if (styles.length === 0) {
    return DEFAULT_STYLE;
  } else if (styles.length === 1) {
    return isOneChar(styles[0]) ? `'${styles[0]}'` : styles[0];
  }

  const type = styles.filter(arg => types.includes(arg))[0];
  const shape = styles.filter(arg => shapes.includes(arg))[0];

  return [type, shape].filter(e => e !== undefined).join(' ');
};
