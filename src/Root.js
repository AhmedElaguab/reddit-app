import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import styled from 'styled-components'

import Header from './components/Header'
import PostList from './components/PostList'
import Article from './components/Article'

const StyledRoot = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
`

const Root = ({ store }) => {
  return (
    <Router>
      <Provider store={store}>
        <StyledRoot>
          <Header />
          <Switch>
            <Route path="/:subreddit?/p/:postId?" component={Article} />
            <Route path="/:subreddit?" component={PostList} />
          </Switch>
        </StyledRoot>
      </Provider>
    </Router>
  )
}

export default Root
