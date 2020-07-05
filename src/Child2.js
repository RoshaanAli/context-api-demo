import React, { useReducer } from 'react'
import numberReducer from "./numberReducer";

export default function Child2() {

    let [state, dispatch] = useReducer(numberReducer, 0)

    return (
        <div>
            Child two..........................! : {state}
            <br />

            <button onClick={() => {dispatch({type: 'increment', val: 100}); console.log('press')}}>Inc number</button>
            <button onClick={() => dispatch({type: 'decrement',val: 100})}>Dec number</button>
            <br/>
            <button onClick={() => dispatch({type: 'reset'})}>RESET</button>

        </div>
    )
}
