import { useEffect, useState } from 'react';
import Joke from './joke';

// 把获取和管理数据这件事和界面渲染这件事分开。做法就是，把获取和管理数据的逻辑放在父组件，也就是聪明组件；
// 把渲染界面的逻辑放在子组件，也就是傻瓜组件。
// 这么做的好处，是可以灵活地修改数据状态管理方式，
// 比如，最初你可能用 Redux 来管理数据，然后你想要修改为用 Mobx，如果按照这种模式分割组件，那么，你需要改的只有聪明组件，傻瓜组件可以保持原状。
const RandomJoke = () => {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    })
      .then((response) => response.json())
      .then((json) => setJoke(json.joke));
  }, []);

  return (
    <div>
      <Joke value={joke} />
    </div>
  );
};

export default RandomJoke;
