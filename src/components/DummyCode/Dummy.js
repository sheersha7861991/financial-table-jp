import React, { useState, useRef, useMemo, useCallback } from 'react';
import { Link } from "react-router-dom";


function Dummy() {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);

    const increment = useCallback(() => {
        countRef.current = countRef.current + 1;
        setCount(countRef.current);
    }, []);

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
}




export default Dummy;
