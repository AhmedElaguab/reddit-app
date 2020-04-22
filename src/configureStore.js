import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
  return store
}

export default configureStore
