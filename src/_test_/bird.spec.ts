import { Bird, Eagle, Penguin } from '../models/bird-model'

describe('Bird', () => {
  test('should Fly', () => {
    const eagle = new Bird({
      name: 'Bird',
      age: 30,
      origin: 'North America'
    })

    expect(eagle.fly()).toEqual('Bird')
  })

  test('should Fly', () => {
    const eagle = new Eagle({
      name: 'Eagle',
      age: 30,
      origin: 'North America'
    })

    expect(eagle.fly()).toEqual('Eagle')
  })

  test('shouldnt Fly Penguin', () => {
    const penguin = new Penguin({
      name: 'Eagle',
      age: 30,
      origin: 'North America'
    })

    expect(penguin.fly()).toEqual(new Error('I cant Fly'))
  })

  test('should Walk and Swim Penguin', () => {
    const penguin = new Penguin({
      name: 'Eagle',
      age: 30,
      origin: 'North America'
    })

    expect(penguin.walk()).toEqual('I can Walk')
    expect(penguin.swim()).toEqual('I can Swim')
  })
})
