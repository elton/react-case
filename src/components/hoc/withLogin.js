import React from 'react';

const getUserId = () => {
  return 1;
};

// 避免了重复代码，以后如果要修改对用户是否登录的判断逻辑，也只需要修改 withLogin，而不用修改每个 React 组件。
export const withLogin = (Component) => {
  const NewComponent = (props) => {
    if (getUserId()) {
      return <Component {...props} />;
    } else {
      return null;
    }
  };
  return NewComponent;
};
