import React from 'react'

function Parent() {
    const userName = "Faraz Arshad"
  return (
    <Child userName={userName} />
  )
}

function Child({userName}){
    return <GrandChild userName={userName} />
}

function GrandChild({userName}){
    return <h2>Hello, {userName}!</h2>
}

export default Parent
