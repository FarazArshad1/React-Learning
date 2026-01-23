import { useState } from 'react'

function SharedState() {
    const [text, setText] = useState('')

    return (
        <div>
            <InputText onChange={setText}/>
            <Display value={text}/>
        </div>
    )
}


function InputText({onChange}) {
    return (
        <div>
            <input type="text" placeholder="Type something..." onChange={e => onChange(e.target.value)} />
        </div>
    )
}

function Display({value}) {
    return (
        <div>
            <h3>Typed: {value}</h3>
        </div>
    )
}

export default SharedState
