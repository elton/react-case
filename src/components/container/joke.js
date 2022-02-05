import React from 'react';
import { HiOutlineEmojiHappy } from 'react-icons/hi';

const Joke = ({ value }) => {
  return (
    <div className='flex m-4 items-center bg-teal-100 p-2 rounded-xl text-neutral-600'>
      <HiOutlineEmojiHappy className='w-16 h-16 pr-4' />
      {value || 'loading...'}
    </div>
  );
};

export default Joke;
