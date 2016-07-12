# ims [![NPM version](https://img.shields.io/npm/v/ims.svg)](https://npmjs.com/package/ims) [![NPM downloads](https://img.shields.io/npm/dm/ims.svg)](https://npmjs.com/package/ims) [![Build Status](https://img.shields.io/circleci/project/egoist/ims/master.svg)](https://circleci.com/gh/egoist/ims)

> In Memory Store (IMS).

## Install

```bash
$ npm install --save ims
```

## Example

```js
const IMS = require('ims')

const store = new IMS({
  girls: ['toka', 'inori', 'saber'],
  best: {
    girl: 'alice'
  }
})

store.where('girls').lastOne()
//=> saber

store.where('girls').appendOne('rem')
//=> ['toka', 'inori', 'saber', 'rem']

store.get('best.girl')
//=> alice

store.where('girls').skip(1)
//=> ['inori', 'saber']
store.where('girls').skip(1, 1)
//=> ['inori']
```

## API

```js
// Example store
const store = new IMS({
  earth: ['china', 'us', 'japan', 'etc'],
  one: {punch: 'man'}
})
```

### ※ `.state`

The stored data itself.

### ※ `.get`/`.set`

Set the value of given key path:

```js
store.set('one.punch', 'girl')
// `t.is` is some AVA's assertion syntax
t.is(store.state.one.punch, 'girl')
// also you get use .get method
store.get('one.punch')
//=> girl
```

### ※ `.where` manipulation

You can manipulate the store state by using `.where`.

```js
//...
const result = store.where('earth')
```

#### .first([amount])

##### amount

Type: `Number`

Get the first X items of the result, it returns the result itself when there's no `amount` specified.

#### .firstOne()

Get the first item of the result.

#### .last([amount])

##### amount

Type: `Number`

Get the last X items of the result, it returns the result itself when there's no `amount` specified.

#### .lastOne()

Get the last item of the result.

#### .skip(start, [limit])

##### start

Type: `Number`<br>
Default: `0`

##### limit

Type: `Number`

Skip the amount of `start` items and return the result.

#### .find([query])

##### query

Type: `Object`<br>
Default: `{}`

Give a object of conditions to find matched items in result.

```js
// get all 14 years old guys
result.find({age: 14})

// get all 14+ years old guys
result.find({$gt: {age: 14}})
```

Special conditions: `$gt` `$gte` `$lt` `$lte` `$contain` `$exclude`

#### .findOne([query])

Same as `.find`, but it returns a single item only.

## License

MIT © [EGOIST](https://github.com/egoist)
