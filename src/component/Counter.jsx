
import React, { useState } from 'react'

function Counter() {
    const[count, setCount]= useState(0);

    const decrementHandler = () => {
        setCount(count - 1);
    };

    const incrementHandler = () => {
        setCount(count + 1);
    };

    const resetHandler = () => {
        setCount(0);
    };
  return (
     <>
     <div className='w-[100vw] h-[100vh]  flex justify-center items-center bg-slate-400 flex-col gap-10 cursor-pointer'>
        <div className='text-blue-600 font-medium text-2xl'>Increment & Decrement</div>
        <div className='bg-slate-50 flex justify-center gap-12 py-3 px-10 rounded-sm text-[25px] text-slate-400'>
            <div onClick={decrementHandler}  className='border-r-2 text-center w-20 border-neutral-300 text-5xl'>-</div>
            <div className='font-bold gap-12  text-5xl'>{count}</div>
            <div onClick={incrementHandler} className='border-r-2 text-center w-20 border-neutral-300 text-5xl'>+</div>
        </div>
        <div onClick={resetHandler} className='bg-blue-500 text-white px-5 py-2 rounded-sm text-lg'>Reset</div>
        
     </div>
     </>
  )
}

export default Counter