export const CHANGE_SUBREDDIT = 'CHANGE_SUBREDDIT'
export const changeSubreddit = payload => ({
  type: CHANGE_SUBREDDIT,
  payload,
})

export const FETCH_POSTS_START = 'FETCH_POSTS_START'
const fetchPostsStart = () => ({ type: FETCH_POSTS_START, payload: {} })
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
const fetchPostsSuccess = ({ json }) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts: json.data.children.map(p => p.data) },
})

export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'
const fetchPostsFailure = ({ error }) => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error },
})

export const fetchPosts = subreddit => dispatch => {
  dispatch(fetchPostsStart())
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(resp => resp.json())
    .then(json => dispatch(fetchPostsSuccess({ json })))
    .catch(error => dispatch(fetchPostsFailure({ error })))
}
