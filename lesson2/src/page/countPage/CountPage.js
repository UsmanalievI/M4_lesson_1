import React, { useCallback, useState } from "react";
import classes from "./CountPage.module.css"

const CountPage=()=>{
    const [count, setCount]=useState(0)
    const increament=()=>{
        setCount=(count+1)
    }
    const decrement=()=>{
        setCount=(count-1)
    }
    return (
        <div className={classes.wrapper}>
            <p>Count:{count}</p>
            <button onClick={increament}>increament</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
};

export default CountPage;
