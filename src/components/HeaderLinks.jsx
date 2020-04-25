import React from 'react'
import styled from 'styled-components'
import HeaderLink from './HeaderLink'

const StyledHeaderLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const HeaderLinks = () => {
  return (
    <StyledHeaderLinks>
      <HeaderLink subreddit="reactjs">React</HeaderLink>
      <HeaderLink subreddit="vuejs">Vue</HeaderLink>
    </StyledHeaderLinks>
  )
}

export default HeaderLinks
