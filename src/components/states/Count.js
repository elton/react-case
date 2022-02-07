import React, { useEffect, useState } from 'react';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';

const Count = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
  }, [count]);

  return (
    <div className='rounded bg-lime-100 p-2 text-neutral-600'>
      <h1 className='text-center text-lg'>useState hooks</h1>
      <div className='flex items-center justify-center space-x-1'>
        <div className='pr-5 font-mono'>{count}</div>
        <button
          onClick={() => setCount((count) => count + 1)}
          className='h-5 w-5 rounded border-[1px] bg-white'>
          <HiPlusSm className='mx-auto text-neutral-500' />
        </button>
        <button
          onClick={() => setCount((count) => count - 1)}
          className='h-5 w-5 rounded border-[1px] bg-white'>
          <HiMinusSm className='mx-auto text-neutral-500' />
        </button>
      </div>
    </div>
  );
};

export default Count;
