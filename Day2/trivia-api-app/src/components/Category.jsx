import React from 'react';

const Category = ({ cat }) => {
  return (
    <p>Category: {cat.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, '&')} </p>
  )
}

export default Category