import RandomJoke from './components/container';
import Hoc from './components/hoc';
import RenderProps from './components/renderprops';

function App() {
  return (
    <div className='m-4 space-y-4'>
      <div className='text-center text-2xl font-semibold text-neutral-700'>
        React 实战练习
      </div>
      <RandomJoke />
      <Hoc />
      <RenderProps />
    </div>
  );
}

export default App;
