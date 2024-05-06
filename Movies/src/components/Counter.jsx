import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const decreaseCountHandler = () => {
        setCount(oldValue => oldValue - 1);
    }

    const increaseCountHandler = () => {
        setCount(oldValue => oldValue + 1);
    }

    let message = null;

    if (count < 0) {
        message = <p>Count can't be negative</p>;
    } else if (count === 0) {
        message = <p>Count can't be zero</p>;
    } else if (count > 10) {
        message = <p>Count can't be greater than 10</p>;
    }

    return(
        <div>
            <h1>Counter</h1>
            <button onClick={decreaseCountHandler}>-</button>
            <p>Count: {count}</p>
            <button onClick={increaseCountHandler}>+</button>
            <p>{message}</p>
        </div>
    );
}