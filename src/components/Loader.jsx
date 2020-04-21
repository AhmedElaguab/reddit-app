import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BallBeat } from 'react-pure-loaders'

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
`

const Loader = props => {
  if (!props.loading) return null

  return (
    <StyledLoader>
      <BallBeat {...props} />
    </StyledLoader>
  )
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default Loader
