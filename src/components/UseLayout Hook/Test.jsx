import { useEffect, useLayoutEffect } from "react";


function Test() {

    useEffect(() => {
        console.log("useEffect Executed");

    }, [])


    useLayoutEffect(() => {
        console.log("useLayoutEffect Executed");

    }, [])

    return (
        <div>
            <h1>Test Component</h1>
        </div>
    )
}


export default Test;