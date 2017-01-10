const assert = require('power-assert');

const isOneChar = require('../lib/isOneChar');

describe('isOneChar', function() {

  it('should return true when passed a single character string', function() {
    assert(isOneChar('a') === true);
    // surrogate pair
    assert(isOneChar('𠮷') === true);
    // emoji
    assert(isOneChar('🍩') === true);
  });

  it('should return false when passed a multiple character string', function() {
    assert(isOneChar('hoge') === false);
    // contains surrogate pair
    assert(isOneChar('𠮷野家') === false);
  });

  it('should return false when passed an empty string', function() {
    assert(isOneChar('') === false);
  });

});
