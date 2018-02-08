import { add } from '../src/index'

test('add two numbers', () => {
  expect(add(1, 2)).toEqual(3)
})

test('add three numbers', () => {
  expect(add(1, 2, 3)).toEqual(6)
})
