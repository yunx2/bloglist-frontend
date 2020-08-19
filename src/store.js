import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import notificationReducer from './reducers/notificationReducer'
import blogsReducer from './reducers/blogsReducer'

const rootReducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

store.subscribe(() => console.log(store.getState()))

export default store