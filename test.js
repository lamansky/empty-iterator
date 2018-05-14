'use strict'

const assert = require('assert')
const emptyIterator = require('.')
const isIterator = require('is-iterator')

describe('emptyIterator()', function () {
  it('should return an iterator', function () {
    assert(isIterator(emptyIterator()))
  })

  it('should return an empty iterator', function () {
    assert(emptyIterator().next().done)
  })
})
