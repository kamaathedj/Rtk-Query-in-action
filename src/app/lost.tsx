import React from 'react';

interface Props{
    url : string,
    children :React.ReactNode
}
const Lost = ({url,children}:Props) => {
  return (
      <h1>{url}</h1>
  )
}

export default Lost;