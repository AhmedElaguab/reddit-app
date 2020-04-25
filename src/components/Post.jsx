import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { snakeCase } from 'lodash'
import styled from 'styled-components'
import TimeAgo from './TimeAgo'

const StyledPost = styled.article`
  background-color: #fff;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 4px;
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 15px;
`

const StyledAuthor = styled.p`
  color: #484848;
  margin: 0;
`

const StyledUps = styled.p`
  background-color: #dd4814;
  margin: 0;
  color: #fff;
  border-radius: 2px;
  padding-top: 3px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 10px;
`

const StyledFlair = styled.p`
  background-color: ${props => props.background};
  color: ${props => (props.color === 'dark' ? '#000' : '#fff')};
  margin: 0;
  border-radius: 2px;
  padding-top: 3px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 10px;
`

const StyledTitle = styled.h3`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const Post = ({ post }) => {
  const {
    title,
    ups,
    author,
    created,
    link_flair_text,
    link_flair_background_color,
    link_flair_text_color,
  } = post

  return (
    <StyledPost>
      <StyledLink to={{ pathname: `/p/${snakeCase(title)}}` }}>
        <StyledHeader>
          <StyledUps>{ups}</StyledUps>
          {link_flair_text && (
            <StyledFlair
              background={link_flair_background_color}
              color={link_flair_text_color}
            >
              {link_flair_text}
            </StyledFlair>
          )}
          <StyledAuthor>
            Posted by: {author}, <TimeAgo date={created} />
          </StyledAuthor>
        </StyledHeader>
        <StyledTitle>{title}</StyledTitle>
      </StyledLink>
    </StyledPost>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    ups: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    link_flair_text: PropTypes.string,
    link_flair_background_color: PropTypes.string.isRequired,
    link_flair_text_color: PropTypes.string.isRequired,
  }),
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
