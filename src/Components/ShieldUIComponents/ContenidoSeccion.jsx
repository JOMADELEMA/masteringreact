import React from "react";
import "./ContenidoSeccion.css";
import Pokedex from "./Secciones/Pokedex";
import Pokemon from "./Secciones/Pokemon";
import Bag from "./Secciones/Bag";
import LeagueCard from "./Secciones/LeagueCard";
import Save from "./Secciones/Save";
import TownMap from "./Secciones/TownMap";
import PokemonCamp from "./Secciones/PokemonCamp";
import MysteryGift from "./Secciones/MysteryGift";
import VS from "./Secciones/VS";
import Options from "./Secciones/Options";



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
        <div>{seccion[nombreSeccion]}</div>
      </div>
    </>
  );
};

export default ContenidoSeccion;
