
const counter = (state=0, action) => {
  let nextState
  switch (action.type) {
    case 'INCREMENT':
      nextState = action.currentNumber
      return nextState + 1
    case 'DECREMENT':
      nextState = action.currentNumber
      return nextState - 1
    default:
      return state
  }
}


export default counter
