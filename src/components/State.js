import React from 'react';
import { Link } from 'react-router-dom';
import Count from './states/Count';
import ReduxCount from './states/ReduxCount';

const State = () => {
  return (
    <>
      <main className='m-4 space-y-4'>
        <h1 className='text-center text-3xl font-semibold text-emerald-700 underline'>
          States Management
        </h1>
        <Count />
        <ReduxCount />
      </main>
      <nav className='m-4 border-t-[1px] pt-1 text-center text-sm text-teal-900 underline'>
        <Link to='/'>Go Home</Link>
      </nav>
    </>
  );
};

export default State;
