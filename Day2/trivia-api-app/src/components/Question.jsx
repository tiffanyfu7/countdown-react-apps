import React from 'react'

const Question = ({ q }) => {
  return (
    <h2>Q: {q.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g,"&")}</h2>
  )
}

export default Question