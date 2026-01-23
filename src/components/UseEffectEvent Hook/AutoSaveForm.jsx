import {useEffect, useEffectEvent} from 'react'

function AutoSaveForm() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: ''
    })

    use
    return (
        <form action="">
            <input type="text" placeholder="Name" value={formData.name} onChange={e=> setFormData({...formData, name : e.target.value})} />
            <input type="text" placeholder="Email" value={formData.email} onChange={e=>setFormData({...formData, email : e.target.value})}/>
        </form>
    )
}

export default AutoSaveForm
