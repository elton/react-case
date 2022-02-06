import React from 'react';

const RenderAll = (props) => {
  return (
    <div className='text-center text-neutral-700 bg-lime-100 rounded-xl p-2 m-4'>
      <div className='text-lg text-center text-neutral-700 font-semibold'>
        Render Props
      </div>
      {props.children(props)}
    </div>
  );
};

export default RenderAll;
