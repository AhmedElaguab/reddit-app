import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { changeSubreddit } from './../actions'

const StyledLink = styled(Link)`
  color: ${({ isActive }) => (isActive ? '#dd4814' : '#fff')};
  background-color: ${({ isActive }) => (isActive ? '#fff' : '#dd4814')};
  border: 1px solid #fff;
  margin-left: 5px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 5px;
  padding-bottom: 3px;
  border-radius: 1px;
  text-decoration: none;
`

export const HeaderLink = ({
  children,
  subreddit,
  changeSubreddit,
  currentSubreddit,
}) => {
  const isActive = subreddit === currentSubreddit
  return (
    <StyledLink
      to={'/' + subreddit}
      onClick={() => changeSubreddit({ subreddit })}
      isActive={isActive}
    >
      {children}
    </StyledLink>
  )
}

HeaderLink.propTypes = {
  subreddit: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({ currentSubreddit: state.subreddit })

const mapDispatchToProps = { changeSubreddit }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLink)
