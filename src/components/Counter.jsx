import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'


const Counter = () => {
    const [amount, setAmount] = useState(0)
    const { count } = useSelector(state => state.counterReducer)// useselector is used to get state from the store
    const dispatch = useDispatch() //used to execute action

    const handleIncrementAmount = () => {
        if (amount) {
            //displahy action without an input
            dispatch(incrementByAmount(amount))
        } else {
            alert("please fill the form")
        }
    }

    return (
        <div className='border rounded p-5 text-center  '>
            <h1 style={{ fontSize: "100px" }}>{count}</h1>
            <div style={{ width: "500px" }} className='d-flex justify-content-between mt-5'>
                <button onClick={() => dispatch(decrement())} type="button" className="btn btn-warning  text-light ">Decrement</button>
                <button onClick={() => dispatch(reset())} type="button" className="btn btn-danger">reset</button>
                <button onClick={() => dispatch(increment())} type="button" className="btn btn-success ">increment</button>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-5 '>
                <input onChange={e => setAmount(e.target.value)} placeholder='input increment amount' type="text" className='form-control' />
                <button onClick={handleIncrementAmount} className='btn btn-primary ms-3'> increment by amount</button>
            </div>

        </div>
    )
}

export default Counter