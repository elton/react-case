import React from 'react';
import { Login, RenderAll } from './RenderPros';

const RenderProps = () => {
  // 所谓 render props，指的是让 React 组件的 props 支持函数这种模式。
  // 因为作为 props 传入的函数往往被用来渲染一部分界面，所以这种模式被称为 render props。
  return (
    <div className='rounded-xl bg-lime-100 p-2 text-center text-neutral-700'>
      <div className='text-center text-lg font-semibold text-neutral-700'>
        Render Props
      </div>
      <RenderAll>{() => <h1>Hello World</h1>}</RenderAll>
      <Login>{({ username }) => <h1>Hello {username}!</h1>}</Login>
    </div>
  );
};

export default RenderProps;
