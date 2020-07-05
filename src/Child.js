import React, { useContext } from 'react';
import ValueContext from "./ValueContext";

export default function Child() {

    let value = useContext(ValueContext)
    console.log(value)
    return (
        <div>
            Child : {value[0]}
            <br />
            <button onClick={() => { value[1](++value[0]) }}>update value</button>
        </div>
    )
}
