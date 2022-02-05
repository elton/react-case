import React from 'react';
import { HiOutlineEmojiHappy } from 'react-icons/hi';

// 如果不使用React.memo，当 RandomJoke 要渲染 Joke 时，即使传入的 props 是一模一样的，
// Joke 也要走一遍完整的渲染过程，这就显得浪费了。
// React.memo 利用了 shouldComponentUpdate，如果props一样，就不再渲染了
const Joke = React.memo(({ value }) => {
  return (
    <div className='flex m-4 items-center bg-teal-100 p-2 rounded-xl text-neutral-600'>
      <HiOutlineEmojiHappy className='w-16 h-16 pr-4' />
      {value || 'loading...'}
    </div>
  );
});

export default Joke;
