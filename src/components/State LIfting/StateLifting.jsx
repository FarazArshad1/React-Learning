import {useState} from 'react'

function StateLifting() {
    const [text, setText] = useState('')

  return (
    <div>
      <InputBox onChange = {setText}/>
      <h3>Typed : {text}</h3>
    </div>
  )
}

function InputBox({onChange}){
    return (
        <div>
            <input type="text" placeholder="Type something..." onChange={e=>onChange(e.target.value)} />
        </div>
    )
}

export default StateLifting
