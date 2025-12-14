import { useEffect, useState } from 'react'

function FirstuseEffectHook() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count : ${count}`
    console.log("Component Rerendered")
  }, [count]) // Here [] is dependency array

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default FirstuseEffectHook
