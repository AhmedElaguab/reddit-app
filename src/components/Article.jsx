import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Container from './Container'

export const Article = ({ match }) => {
  const { postId } = match.params

  useEffect(() => {}, [postId])

  if (!postId) {
    return (
      <Container>
        <p>404, not found.</p>
      </Container>
    )
  }
  return (
    <Container>
      <p>{postId}</p>
    </Container>
  )
}

Article.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
