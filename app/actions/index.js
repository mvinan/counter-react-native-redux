export const addCount = currentNumber => {
  return {
    type: 'INCREMENT',
    currentNumber
  }
}

export const removeCount = currentNumber => {
  return {
    type: 'DECREMENT',
    currentNumber
  }
}
