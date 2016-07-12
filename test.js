import test from 'ava'
import IMS from './src'

const sample = {
  foo: 'bar',
  bar: {
    baz: 'what'
  },
  people: [
    {name: 'kevin', age: 17},
    {name: 'willson', age: 20}
  ],
  nums: [1, 2, 3, 4, 5]
}

test('get', t => {
  const store = new IMS(sample)
  t.is(store.get('foo'), 'bar')
  t.is(store.get('bar.baz'), 'what')
})

test('set', t => {
  const store = new IMS(sample)
  store.set('foo', 'baz')
  store.set('bar.baz', 'barbee')
  t.is(store.get('foo'), 'baz')
  t.is(store.get('bar.baz'), 'barbee')
})

test('append', t => {
  const store = new IMS(sample)
  store.key('people').append('cris').append('lee')
  t.is(store.key('people').last(), 'lee')
})

test('findOne', t => {
  const store = new IMS(sample)
  const kevin = store.key('people').findOne({name: 'kevin'})
  t.is(kevin.name, 'kevin')
})

test('findOne $gt', t => {
  const store = new IMS(sample)
  const willson = store.key('people').findOne({$gt: {age: '17'}})
  t.is(willson.name, 'willson')
})

test('skip', t => {
  const store = new IMS(sample)
  const foo = store.key('nums').skip(3)
  const bar = store.key('nums').skip(3, 1)
  t.deepEqual(foo, [4, 5])
  t.deepEqual(bar, [4])
})
