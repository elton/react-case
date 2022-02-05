import React from 'react';
import { withLogin } from './withLogin';

// const LogoutButton = () => {
//   if (getUserId()) {
//     return ...; // 显示”退出登录“的JSX
//   } else {
//     return null;
//   }
// };

// const ShoppintCart = () => {
//   if (getUserId()) {
//     return ...; // 显示”购物车“的JSX
//   } else {
//     return null;
//   }
// };

// 上面两个组件明显有重复的代码，我们可以把重复代码抽取出来，形成 withLogin 这个高阶组件

const Hoc = () => {
  const LoginButton = withLogin((props) => {
    return <div>退出登录, {props.name}</div>;
  });

  const ShoppingCart = withLogin((props) => {
    return <div>您的购物车: {props.name}</div>;
  });

  return (
    <div>
      <LoginButton name='Elton' />
      <ShoppingCart name='Elton' />
    </div>
  );
};

export default React.memo(Hoc);
