import test from 'ava'
import IMS from './src'

const sample = {
  foo: 'bar',
  bar: {
    baz: 'what'
  },
  people: [
    {name: 'kevin'},
    {name: 'willson'}
  ]
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
