import React from 'react';
import { getUser } from '../../libs/getUser';

export const RenderAll = (props) => {
  return <div>{props.children(props)}</div>;
};

export const Login = (props) => {
  const username = getUser().username;

  if (username) {
    const allProps = { username, ...props };
    return <>{props.children(allProps)}</>;
  } else {
    return null;
  }
};
