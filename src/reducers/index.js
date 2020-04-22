import {
  CHANGE_SUBREDDIT,
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './../actions'

const initialState = { subreddit: 'reactjs', isLoading: false, hasError: null }
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SUBREDDIT:
      return { ...state, subreddit: payload.subreddit }
    case FETCH_POSTS_START:
      return { ...state, isLoading: true }
    case FETCH_POSTS_SUCCESS:
      return { ...state, isLoading: false, posts: [...payload.posts] }
    case FETCH_POSTS_FAILURE:
      return { ...state, isLoading: false, hasError: payload.error }
    default:
      return state
  }
}

export default rootReducer
