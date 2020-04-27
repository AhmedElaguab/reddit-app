import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from './../actions'

import Container from './Container'
import Post from './Post'
import Loader from './Loader'

export const PostList = ({
  posts,
  subreddit,
  fetchPosts,
  isLoading,
  hasError,
  match,
}) => {
  const currentSubreddit = match.params.subreddit || subreddit
  useEffect(() => {
    fetchPosts(currentSubreddit)
  }, [currentSubreddit, fetchPosts])
  return (
    <Container>
      <Loader loading={isLoading} color="#dd4814" />
      {hasError && !isLoading && (
        <p>Oops, there is an error: {hasError.message}</p>
      )}
      {posts &&
        !isLoading &&
        posts.map(post => <Post post={post} key={post.id} />)}
    </Container>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  subreddit: PropTypes.string,
  fetchPosts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.oneOfType([PropTypes.object]),
}

const mapStateToProps = ({ subreddit, postsBySubreddit }) => {
  const { isLoading, posts, hasError } = postsBySubreddit[subreddit] || {
    isLoading: true,
    posts: [],
  }
  return {
    subreddit,
    isLoading,
    posts,
    hasError,
  }
}

const mapDispatchToProps = { fetchPosts }

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
