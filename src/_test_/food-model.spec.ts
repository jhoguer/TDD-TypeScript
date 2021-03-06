import { FoodHelper } from '../helpers/food-model-helper'
import { Food } from '../models/food-model'

describe('Class Food', () => {
  test('should returning values of the class Food', () => {
    const food = new Food({
      name: 'salad',
      desciption: 'is very good',
      price: 34,
      inventory: 50
    })

    expect(food.getFood()).toEqual(food)
    expect(food.getName()).toEqual('salad')
    expect(food.getDescription()).toEqual('is very good')
    expect(food.getPrice()).toBe(34)
    expect(food.getInventory()).toBe(50)
  })

  it('Food Helper', () => {
    const foodHelper = new FoodHelper()

    expect(foodHelper).toEqual(foodHelper)
  })
})
