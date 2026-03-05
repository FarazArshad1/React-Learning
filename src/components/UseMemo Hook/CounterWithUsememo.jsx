import { useState, useMemo } from "react";

function CounterWithUsememo() {

    const[count, setCount] = useState(0)
    const [text, setText] = useState("")

    const expensiveCalculation = (num) => {
        console.log("Calculating...")
        let total = 0;
        for (let i = 0; i < 10000000; i++){
            total += i;
        }
        return total + num;
    }

    const result = useMemo(() => expensiveCalculation(count),[count])

    return(
        <div>
            <h2>Result : {result}</h2>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <p>Count : {count}</p>
        </div>
    )
}


export default CounterWithUsememo;
