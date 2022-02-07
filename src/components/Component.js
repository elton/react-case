import { Link } from 'react-router-dom';
import RandomJoke from './container';
import Hoc from './hoc';
import RenderProps from './renderprops';

const Component = () => {
  return (
    <>
      <main className='m-4 space-y-4'>
        <h1 className='text-center text-3xl font-semibold text-emerald-700 underline'>
          Components
        </h1>
        <RandomJoke />
        <Hoc />
        <RenderProps />
      </main>
      <nav className='m-4 border-t-[1px] pt-1 text-center text-sm text-teal-900 underline'>
        <Link to='/'>Go Home</Link>
      </nav>
    </>
  );
};

export default Component;
