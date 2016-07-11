import dotProp from 'dot-prop'

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function _append(arr, item) {
  return arr.concat(item)
}

function _prepend(arr, item) {
  return [item].concat(arr)
}

class IMS {
  constructor(initialState = {}) {
    if (!isObject(initialState)) {
      throw new Error('[IMS] Initial state is required to be an Object.')
    }
    this.state = initialState
  }

  get(key) {
    return dotProp.get(this.state, key)
  }

  set(key, value) {
    dotProp.set(this.state, key, value)
    return this
  }

  key(key) {
    const state = this.state
    const value = dotProp.get(this.state, key)

    return {
      append(item) {
        dotProp.set(state, key, _append(value, item))
      },

      prepend(item) {
        dotProp.set(state, key, _prepend(value, item))
      },

      first(length) {
        return length ? value.slice(0, length) : value[0]
      },

      last(length) {
        return length ? value.slice(-length) : value[value.length - 1]
      }
    }
  }
}

export default IMS
