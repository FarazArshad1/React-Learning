import { useState } from 'react'

function ToggleText() {

    const [isVisible, SetIsVisible] = useState(true)


    return (
        <div>
            <button onClick={() => SetIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"} Text
            </button>
            {isVisible && <p>This is secret test</p>}
        </div>
    )
}

export default ToggleText
