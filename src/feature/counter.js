import React, { useEffect, useState } from 'react'
import {increment,decrement,reset,incrementByAmount} from "./counterSlice"
import {useSelector,useDispatch} from "react-redux"
const Counter = () => {
const count = useSelector(state=>state.value)
const dispatch = useDispatch()
const [amount,setAmount]=useState(0)

const numberValue= Number(amount)|| 0
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment by 1</button>
      <button onClick={()=>dispatch(decrement())}>Decrement by 1</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>

      <br>
      </br>
      <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <button className='' onClick={()=>dispatch(incrementByAmount(numberValue))}>Increase By AMount</button>
    </div>
  )
}

export default Counter
