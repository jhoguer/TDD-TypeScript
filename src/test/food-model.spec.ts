import { Food } from '../models/food-model'

describe('Class Food', () => {
  test('should returning values of the class Food', () => {
    const food = new Food('saldad', 'is very good', 34)

    expect(food.getName()).toEqual('saldad')
    expect(food.getDescription()).toEqual('is very good')
    expect(food.getPrice()).toBe(34)
  })
})
