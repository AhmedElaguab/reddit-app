import React from 'react'
import { connect } from 'react-redux'

import Container from './Container'
import Loader from './Loader'

export const PostList = ({ posts }) => {
  return (
    <Container>
      <Loader loading={!posts} color="#dd4814" />
    </Container>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
