import React from 'react';
import { getUser } from '../../libs/getData';

const user = getUser();

// 避免了重复代码，以后如果要修改对用户是否登录的判断逻辑，也只需要修改 withLogin，而不用修改每个 React 组件。
export const withLogin = (Component) => {
  const NewComponent = (props) => {
    if (user) {
      const name = user.name;
      const allProps = { name, ...props };
      return <Component {...allProps} />;
    } else {
      return null;
    }
  };
  return NewComponent;
};
