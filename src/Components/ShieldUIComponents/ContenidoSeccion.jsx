import React from "react";
import "./ContenidoSeccion.css";

import {Pokedex, Pokemon, Bag, LeagueCard, Save, TownMap, PokemonCamp, MysteryGift, VS, Options} from '../ShieldUIComponents';



const ContenidoSeccion = (props) => {
  const seccion = {
    pokedex: <Pokedex />,
    pokemon: <Pokemon />,
    bag: <Bag />,
    league_card: <LeagueCard />,
    save: <Save />,
    town_map: <TownMap />,
    pokemon_camp: <PokemonCamp />,
    mystery_gift: <MysteryGift />,
    vs: <VS />,
    options: <Options />,
  };

  const {nombreSeccion} = props;

  return (
    <>
      <div
        className="contenidoSeccion"
      >
        {seccion[nombreSeccion]}
      </div>
    </>
  );
};

export default ContenidoSeccion;
