import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";


function Timer() {
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false)

    useEffect(() => {
        if (start) {
            setTimeout(() => {
                setCount(prev => prev + 1)
            }, 100)
        }


    }, [start, count])

    const increment = () => {
        setStart(!start)
    }

    return (
        <div>
            <button onClick={increment}>Start</button>
            <p>Timer: {count}</p>
        </div>
    );
}




export default Timer;
