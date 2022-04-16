import React, { useState } from "react";
import {
  Book,
  Pokeball,
  Briefcase,
  Id,
  DeviceFloppy,
  MapPin,
  Tent,
  Gift,
  Tournament,
  Settings,
} from "tabler-icons-react";
import "./ShieldUI.css";
import { Link } from "react-router-dom";

const ShieldUI = () => {
  const [descripcion, setDescripcion] = useState(
    "Continue your Gym Challenge!"
  );

  const hoverIcono = (iconoID) => {
    switch (iconoID) {
      case "pokedex":
        setDescripcion("Enciclopedia Pokemon.");
        break;
      case "pokemon":
        setDescripcion("Gestiona tu equipo Pokemon.");
        break;
      case "bag":
        setDescripcion("Gestiona tu inventario.");
        break;
      case "league-card":
        setDescripcion("Ve tu información de entrenador.");
        break;
      case "save":
        setDescripcion("Guarda tu progreso.");
        break;
      case "town-map":
        setDescripcion("Mapa de la region.");
        break;
      case "pokemon-camp":
        setDescripcion("Diviertete con tus Pokemon.");
        break;
      case "mystery-gift":
        setDescripcion("Recibe sorpresas.");
        break;
      case "vs":
        setDescripcion("Busca oponentes para combatir.");
        break;
      case "options":
        setDescripcion("Configuracion del juego.");
        break;
      default:
        setDescripcion("Continue your Gym Challenge!");
        break;
    }
  };

  const desHoverIcono = () => {
    setDescripcion("Continue your Gym Challenge!");
  };

  return (
    <>
      <div className="container-fluid backgroundStyle">
        {/* <div style={backgroundStyle}> */}
        <div id="contenedorMenu">
          <div id="contenedorIconos" className="contenedorIconos">
            <a href="#pokedex" style={{ textDecoration: "none" }}>
              <div
                className="optionStyle"
                onMouseEnter={() => {
                  hoverIcono("pokedex");
                }}
                onMouseLeave={() => desHoverIcono()}
              >
                <div className="iconStyle">
                  <span className="iconTextStyle">
                    <Book size={150} strokeWidth={1} color="orange" />
                  </span>
                </div>
                <div>
                  <p className="optionTextStyle">Pokedex</p>
                </div>
              </div>
            </a>

            <a href="#pokemon" style={{ textDecoration: "none" }}>
              <div
                className="optionStyle"
                onMouseEnter={() => {
                  hoverIcono("pokemon");
                }}
                onMouseLeave={() => desHoverIcono()}
              >
                <div className="iconStyle">
                  <span className="iconTextStyle">
                    <Pokeball size={150} strokeWidth={1} color="red" />
                  </span>
                </div>
                <div>
                  <span className="optionTextStyle">Pokemon</span>
                </div>
              </div>
            </a>

            <a href="#bag" style={{ textDecoration: "none" }}>
              <div
                className="optionStyle"
                onMouseEnter={() => {
                  hoverIcono("bag");
                }}
                onMouseLeave={() => desHoverIcono()}
              >
                <div className="iconStyle">
                  <span className="iconTextStyle">
                    <Briefcase size={150} strokeWidth={1} color="orange" />{" "}
                  </span>
                </div>
                <div>
                  <span className="optionTextStyle">Bag</span>
                </div>
              </div>
            </a>

            <a href="#league-card" style={{ textDecoration: "none" }}>
              <div
                className="optionStyle"
                onMouseEnter={() => {
                  hoverIcono("league-card");
                }}
                onMouseLeave={() => desHoverIcono()}
              >
                <div className="iconStyle">
                  <span className="iconTextStyle">
                    <Id size={150} strokeWidth={1} color="blue" />{" "}
                  </span>
                </div>
                <div>
                  <span className="optionTextStyle">League Card</span>
                </div>
              </div>
            </a>

            <a href="#save" style={{ textDecoration: "none" }}>
              <div
                className="optionStyle"
                onMouseEnter={() => {
                  hoverIcono("save");
                }}
                onMouseLeave={() => desHoverIcono()}
              >
                <div className="iconStyle">
                  <span className="iconTextStyle">
                    <DeviceFloppy
                      size={150}
                      strokeWidth={1}
                      color="lightgreen"
                    />{" "}
                  </span>
                </div>
                <div>
                  <span className="optionTextStyle">Save</span>
                </div>
              </div>
            </a>

            <a href="#town-map" style={{ textDecoration: "none" }}>
              <div
                className="optionStyle"
                onMouseEnter={() => {
                  hoverIcono("town-map");
                }}
                onMouseLeave={() => desHoverIcono()}
              >
                <div className="iconStyle">
                  <span className="iconTextStyle">
                    <MapPin size={150} strokeWidth={1} color="green" />
                  </span>
                </div>
                <div>
                  <span className="optionTextStyle">Town Map</span>
                </div>
              </div>
            </a>

            <a href="#pokemon-camp" style={{ textDecoration: "none" }}>
              <div
                className="optionStyle"
                onMouseEnter={() => {
                  hoverIcono("pokemon-camp");
                }}
                onMouseLeave={() => desHoverIcono()}
              >
                <div className="iconStyle">
                  <span className="iconTextStyle">
                    <Tent size={150} strokeWidth={1} color="#ffbf00" />
                  </span>
                </div>
                <div>
                  <span className="optionTextStyle">Pokemon Camp</span>
                </div>
              </div>
            </a>

            <a href="#mystery-gift" style={{ textDecoration: "none" }}>
              <div
                className="optionStyle"
                onMouseEnter={() => {
                  hoverIcono("mystery-gift");
                }}
                onMouseLeave={() => desHoverIcono()}
              >
                <div className="iconStyle">
                  <span className="iconTextStyle">
                    <Gift size={150} strokeWidth={1} color="purple" />
                  </span>
                </div>
                <div>
                  <span className="optionTextStyle">Mystery Gift</span>
                </div>
              </div>
            </a>

            <a href="#vs" style={{ textDecoration: "none" }}>
              <div
                className="optionStyle"
                onMouseEnter={() => {
                  hoverIcono("vs");
                }}
                onMouseLeave={() => desHoverIcono()}
              >
                <div className="iconStyle">
                  <span className="iconTextStyle">
                    <Tournament size={150} strokeWidth={1} color="darkgreen" />
                  </span>
                </div>
                <div>
                  <span className="optionTextStyle">VS</span>
                </div>
              </div>
            </a>

            <a href="#options" style={{ textDecoration: "none" }}>
              <div
                className="optionStyle"
                onMouseEnter={() => {
                  hoverIcono("options");
                }}
                onMouseLeave={() => desHoverIcono()}
              >
                <div className="iconStyle">
                  <span className="iconTextStyle">
                    <Settings size={150} strokeWidth={1} color="darkblue" />
                  </span>
                </div>
                <div>
                  <span className="optionTextStyle">Options</span>
                </div>
              </div>
            </a>
          </div>
          <div id="contenedorDescripcion" className="contenedorDescription">
            <div className="descriptionStyle">
              <span className="descriptionTextStyle">{descripcion}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid backgroundPokedexStyle">
        <h1 className="" id="pokedex">
          Pokedex
        </h1>
      </div>
      <div className="container-fluid backgroundPokemonStyle">
        <h1 className="" id="pokemon">
          Pokemon
        </h1>
      </div>
      <div className="container-fluid backgroundBagStyle">
        <h1 className="" id="bag">
          Bag
        </h1>
      </div>
      <div className="container-fluid backgroundLeagueCardStyle">
        <h1 className="" id="league-card">
          League Card
        </h1>
      </div>
      <div className="container-fluid backgroundSaveStyle">
        <h1 className="" id="save">
          Save
        </h1>
      </div>
      <div className="container-fluid backgroundTownMapStyle">
        <h1 className="" id="town-map">
          Town Map
        </h1>
      </div>
      <div className="container-fluid backgroundMysteryGiftStyle">
        <h1 className="" id="mystery-gift">
          Mystery Gift
        </h1>
      </div>
      <div className="container-fluid backgroundVSStyle">
        <h1 className="" id="vs">
          VS
        </h1>
      </div>
      <div className="container-fluid backgroundOptionsStyle">
        <h1 className="" id="options">
          Options
        </h1>
      </div>
    </>
  );
};

export default ShieldUI;
