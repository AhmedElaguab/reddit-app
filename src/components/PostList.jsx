import React, { useEffect } from 'react'
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
}) => {
  useEffect(() => {
    fetchPosts(subreddit)
  }, [subreddit, fetchPosts])
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
