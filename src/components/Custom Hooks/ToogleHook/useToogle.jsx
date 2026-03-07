import { useState } from "react";

export default function useToogle(initialValue = false) {
    const [value, setValue] = useState(initialValue)

    const toogle = () => setValue(prev => !prev)
    
    return [value, toogle]
}