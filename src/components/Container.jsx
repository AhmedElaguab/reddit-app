import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledContainer = styled.div`
  width: 640px;
`

function Container({ children }) {
  return (
    <ContainerWrapper>
      <StyledContainer>{children}</StyledContainer>
    </ContainerWrapper>
  )
}

export default Container
