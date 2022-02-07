import React from 'react';

export const RenderAll = (props) => {
  return (
    <div className='rounded-xl bg-lime-100 p-2 text-center text-neutral-700'>
      <div className='text-center text-lg font-semibold text-neutral-700'>
        Render Props
      </div>
      {props.children(props)}
    </div>
  );
};
