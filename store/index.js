import { createStore } from 'redux'

const reducer = (state, action) => {
  return state
}

const store = createStore(reducer)

store.dispatch()

store.getState()

store.subscribe(() => console.log(store.getState()))
