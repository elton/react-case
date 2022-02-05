import React from 'react';
import RandomJoke from './components/container';
import Hoc from './components/hoc';

function App() {
  return (
    <>
      <Hoc />
      <RandomJoke />
    </>
  );
}

export default React.memo(App);
