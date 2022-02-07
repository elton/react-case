import React from 'react';
import { getUser } from '../../libs/getData';

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

export const Auth = (props) => {
  const username = getUser().username;

  if (username) {
    const allProps = { username, ...props };
    return <>{props.login(allProps)}</>;
  } else {
    <>{props.nologin(props)}</>;
  }
};
