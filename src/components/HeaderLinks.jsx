import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const StyledHeaderLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const HeaderLinks = () => {
  return (
    <StyledHeaderLinks>
      <Link subreddit="reactjs">React</Link>
      <Link subreddit="vuejs">Vue</Link>
    </StyledHeaderLinks>
  )
}

export default HeaderLinks
