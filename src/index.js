import dotProp from 'dot-prop'
import checkQuery from './check-query'

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function _append(arr, item) {
  return arr.concat(item)
}

function _prepend(arr, item) {
  return [item].concat(arr)
}

function _find(arr, query = {}) {
  return arr.filter(item => {
    for (const key in query) {
      if (key[0] === '$') {
        return checkQuery(item, key, query[key])
      } else if (item[key] !== query[key]) {
        return false
      }
    }
    return true
  })
}

function _findOne(arr, query) {
  return _find(arr, query)[0]
}

/**
 * @constructor IMS
 * @param {Object} initialState
 */
class IMS {
  constructor(initialState = {}) {
    if (!isObject(initialState)) {
      throw new Error('[IMS] Initial state is required to be an Object.')
    }
    this.state = initialState
  }

  /**
   * Get value by given key path
   * @param {String} key - Nested dot prop
   * @return {Any} value
   */
  get(key) {
    return dotProp.get(this.state, key)
  }

  /**
   * Set value by given key path
   * @param {String} key - Nested dot prop
   * @param {Any} value - New value
   */
  set(key, value) {
    dotProp.set(this.state, key, value)
    return this
  }

  /**
   * Manipulate the value of a key
   * @param {String} key - Nested dot prop
   * @return {Object} methods
   */
  key(key) {
    const state = this.state
    const value = dotProp.get(this.state, key)

    const methods = {
      append(item) {
        dotProp.set(state, key, _append(value, item))
        return methods
      },

      prepend(item) {
        dotProp.set(state, key, _prepend(value, item))
        return methods
      },

      first(length) {
        return length ? value.slice(0, length) : value[0]
      },

      last(length) {
        return length ? value.slice(-length) : value[value.length - 1]
      },

      skip(start = 0, limit) {
        return limit ? value.slice(start, start + limit) : value.slice(start)
      },

      find(query) {
        return _find(value, query)
      },

      findOne(query) {
        return _findOne(value, query)
      }
    }

    return methods
  }
}

export default IMS
