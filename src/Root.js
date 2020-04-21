import React from 'react'
import Header from './components/Header'
import PostList from './components/PostList'
import styled from 'styled-components'
import { Provider } from 'react-redux'

const StyledRoot = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
`

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <StyledRoot>
        <Header />
        <PostList />
      </StyledRoot>
    </Provider>
  )
}

export default Root
