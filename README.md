# ims [![NPM version](https://img.shields.io/npm/v/ims.svg)](https://npmjs.com/package/ims) [![NPM downloads](https://img.shields.io/npm/dm/ims.svg)](https://npmjs.com/package/ims) [![Build Status](https://img.shields.io/circleci/project/egoist/ims/master.svg)](https://circleci.com/gh/egoist/ims)

> In Memory Store (IMS).

## Install

```bash
$ npm install --save ims
```

## Usage

```js
const IMS = require('ims')

const store = new IMS({
  girls: ['toka', 'inori', 'saber'],
  best: {
    girl: 'alice'
  }
})

store.key('girls').last()
//=> saber

store.key('girls').append('rem')
//=> ['toka', 'inori', 'saber', 'rem']

store.get('best.girl')
//=> alice
```

## API

Not finished...

## License

MIT © [EGOIST](https://github.com/egoist)
