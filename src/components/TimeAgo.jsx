import React from 'react'
import ReactTimeAgo from 'react-timeago'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(englishStrings)

function TimeAgo({ date }) {
  return <ReactTimeAgo date={date * 1000} formatter={formatter} />
}

export default TimeAgo
