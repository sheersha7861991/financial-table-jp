import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { incrementCounter, decrementCounter } from '../../state/action/action';

function Counter() {

    //const counter = useSelector(state => state.counter)
    //const dispatch = useDispatch()

    const [counter, setCounter] = useState(0)

    const incrementC = () => {
        //dispatch(incrementCounter(4))
        setTimeout(() => {
            setCounter(counter + 1)

        }, 1000)

    }
    const decrementC = () => {
        //dispatch(decrementCounter(1))
    }
    return (
        <div>
            <h1>This is the contact page</h1>
            <h1>Counter: {counter}</h1>
            <button type='primary' onClick={incrementC}>Increment</button>
            <button type='primary' onClick={decrementC}>Decrement</button>
            <h6>react windowing , react virtualization,event loop</h6>
        </div>
    )
}

export default Counter