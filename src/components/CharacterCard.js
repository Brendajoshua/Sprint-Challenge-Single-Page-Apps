import React from "react";

const CharacterCard = ({name, location, image, origin}) => {
  return(
  <section>
    <header>{name}</header>
    <img src={image} alt={name}/>
    <p>Location: {location.name}</p>
    <p>origin: {origin.name}</p>
  </section>
  )
}

export default CharacterCard;
