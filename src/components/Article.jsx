import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import Container from './Container'

export const Article = ({ match, post }) => {
  const { postId } = match.params

  if (!postId) {
    return (
      <Container>
        <p>404, not found.</p>
      </Container>
    )
  }
  return (
    <Container>
      <h2>{post.title}</h2>
      <hr />
      <div>
        <ReactMarkdown>{post.selftext}</ReactMarkdown>
      </div>
    </Container>
  )
}

Article.propTypes = {}

const mapStateToProps = ({ postsBySubreddit }, { match }) => {
  const { postId, subreddit } = match.params

  const post = postsBySubreddit[subreddit].posts.find(
    post => post.id === postId,
  )

  console.log(postsBySubreddit)

  console.log(post)

  return {
    post,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
