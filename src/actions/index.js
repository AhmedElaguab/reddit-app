export const CHANGE_SUBREDDIT = 'CHANGE_SUBREDDIT'
export const changeSubreddit = payload => ({
  type: CHANGE_SUBREDDIT,
  payload,
})

export const FETCH_POSTS_START = 'FETCH_POSTS_START'
const fetchPostsStart = ({ subreddit }) => ({
  type: FETCH_POSTS_START,
  payload: { subreddit },
})
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
const fetchPostsSuccess = ({ subreddit, json }) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { subreddit, posts: json.data.children.map(p => p.data) },
})

export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'
const fetchPostsFailure = ({ subreddit, error }) => ({
  type: FETCH_POSTS_FAILURE,
  payload: { subreddit, error },
})

export const fetchPosts = subreddit => dispatch => {
  dispatch(fetchPostsStart({ subreddit }))
  dispatch(changeSubreddit({ subreddit }))
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(resp => resp.json())
    .then(json => dispatch(fetchPostsSuccess({ subreddit, json })))
    .catch(error => dispatch(fetchPostsFailure({ subreddit, error })))
}
