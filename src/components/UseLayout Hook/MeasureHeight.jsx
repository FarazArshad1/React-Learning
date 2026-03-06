import { useLayoutEffect, useState, useRef } from "react";

function MeasureHeight() {

    const boxRef = useRef(null)
    const [height, setHeight] = useState(0)

    useLayoutEffect(() => {
        setHeight(boxRef.current.clientHeight)
    }, [])

    return (
        <>
            <div ref={boxRef} style={{ width: "200px", padding: "20px", background: "#eee" }}>
                hello World ! Measure Me
            </div>
            <p>
                Height : {height}
            </p>
        </>
    )

}


export default MeasureHeight;