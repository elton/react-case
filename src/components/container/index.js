import { useEffect, useState } from 'react';
import Joke from './joke';

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
