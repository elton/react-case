import React, { useState } from 'react';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import {
  decremented,
  incrementAsync,
  incrementByAmount,
  incremented,
  selectCount,
} from '../../reducers/counter/counterSlice';

const ReduxCount = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
  return (
    <div className='space-y-2 rounded bg-orange-100 p-2 text-neutral-600'>
      <h1 className='text-center text-lg'>Redux</h1>
      <div className='flex items-center justify-center space-x-1'>
        <div className='pr-5 font-mono'>{count}</div>
        <button
          aria-label='Set increment amount'
          onClick={() => dispatch(incremented())}
          className='h-5 w-5 rounded border-[1px] bg-white'>
          <HiPlusSm className='mx-auto text-neutral-500' />
        </button>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decremented())}
          className='h-5 w-5 rounded border-[1px] bg-white'>
          <HiMinusSm className='mx-auto text-neutral-500' />
        </button>
      </div>
      <div className='flex items-center justify-center space-x-1'>
        <input
          className='mr-2 h-5 w-12 rounded border-[1px] border-orange-200 p-1 text-center text-sm text-neutral-500'
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          onFocus={(e) => (e.target.value = '')}
        />
        <button
          className='rounded bg-lime-50 py-1 px-2 text-xs text-neutral-600 shadow'
          onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button
          className='rounded bg-lime-50 py-1 px-2 text-xs text-neutral-600 shadow'
          onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
      </div>
    </div>
  );
};

export default ReduxCount;
