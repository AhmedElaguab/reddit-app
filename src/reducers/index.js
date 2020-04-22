import { combineReducers } from 'redux'

import {
  CHANGE_SUBREDDIT,
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './../actions'

const subreddit = (state = 'reactjs', { type, payload }) => {
  switch (type) {
    case CHANGE_SUBREDDIT:
      return payload.subreddit
    default:
      return state
  }
}

const posts = (
  state = { isLoading: false, posts: [], hasError: null },
  { type, payload },
) => {
  switch (type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: [...payload.posts],
      }
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: payload.error,
      }
    default:
      return state
  }
}

const postsBySubreddit = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_START:
    case FETCH_POSTS_SUCCESS:
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        [payload.subreddit]: posts(state[subreddit], { type, payload }),
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ subreddit, postsBySubreddit })

export default rootReducer
