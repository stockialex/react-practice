import { useState, useEffect } from "react";

function ReusableHook(key, defaultValue = ''){
    const [state, setState] = useState(() => window.localStorage.getItem(key) || defaultValue)

    useEffect(() => {
        console.log('Entrando en el useEffect')
        window.localStorage.setItem(key, state)
    }, [key, state])

    return [state, setState]
}

export default ReusableHook;