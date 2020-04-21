import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { changeSubreddit } from './../actions'

const StyledLink = styled.a`
  color: #fff;
  border: 1px solid #fff;
  margin-left: 5px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 5px;
  padding-bottom: 3px;
  border-radius: 1px;
  text-decoration: none;
`

export const Link = ({ children, subreddit, changeSubreddit }) => {
  return (
    <StyledLink href="#" onClick={() => changeSubreddit({ subreddit })}>
      {children}
    </StyledLink>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = { changeSubreddit }

export default connect(mapStateToProps, mapDispatchToProps)(Link)
