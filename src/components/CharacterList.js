import React, { useEffect, useState } from "react";
import Axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(({data: {results}}) => setCharacters(results))
    .catch(setError)
  }, []);

  if (error) {
    return<div>An error occured!</div>
  }

  if (!characters) {
    return <div name="Characters"/>
  }

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
