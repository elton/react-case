import React from 'react';
import { RenderAll } from './RenderAll';

const RenderProps = () => {
  // 所谓 render props，指的是让 React 组件的 props 支持函数这种模式。
  // 因为作为 props 传入的函数往往被用来渲染一部分界面，所以这种模式被称为 render props。
  return <RenderAll>{() => <h1>Hello World</h1>}</RenderAll>;
};

export default RenderProps;
