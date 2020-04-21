import { CHANGE_SUBREDDIT } from './../actions'

const initialState = { subreddit: 'reactjs' }
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SUBREDDIT:
      return { ...state, subreddit: payload.subreddit }
    default:
      return state
  }
}

export default rootReducer
