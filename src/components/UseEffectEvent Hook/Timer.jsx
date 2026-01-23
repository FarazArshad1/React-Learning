import { useState, useEffect, useEffectEvent } from 'react'

function Timer() {
    const [count, setCount] = useState(0)

    const onTick = useEffectEvent(()=>{
        console.log("Count updated inside useEffectEvent:", count);
        setCount((c)=>c+1)
    })

    useEffect(()=>{
        const interval = setInterval(()=>{
            onTick()
        }, 1000)
        
        return () => clearInterval(interval)
    },[])

    return (
        <div>
            <h2>Count : {count}</h2>
        </div>
    )
}

export default Timer
