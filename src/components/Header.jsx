import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import HeaderLinks from './HeaderLinks'
import Container from './Container'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: #dd4814;
  color: #fff;
  padding: 15px 0;
  margin-bottom: 15px;
`

const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`

const StyledLogo = styled.h3`
  flex-grow: 1;
  margin: 0;
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const Header = ({ subreddit }) => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderContent>
          <StyledLogo>
            <StyledLink to="/">r/{subreddit}</StyledLink>
          </StyledLogo>
          <HeaderLinks />
        </StyledHeaderContent>
      </Container>
    </StyledHeader>
  )
}

Header.propTypes = {
  subreddit: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
