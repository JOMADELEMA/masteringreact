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

const ContenedorIconos = () => {
  const [descripcion, setDescripcion] = useState(
    "Continue your Gym Challenge!"
  );


//se utiliza esta forma para evitar utilizar switch.
  const texto = {
    pokedex: "Enciclopedia pokemon.", 
    pokemon: "Gestiona tu equipo pokemon.",
    bag: "Gestiona tu inventario.",
    league_card: "Ve tu información de entrenador.",
    save: "Guarda tu progreso.",
    town_map: "Mapa de la region.", 
    pokemon_camp: "Diviertete con tus pokemon.",
    mystery_gift: "Recibe Sorptresas.",
    vs: "Busca oponentes para combatir.",
    options: "Configuraciones del juego.",

  }

  const hoverIcono = (iconoID) => {
    setDescripcion(texto[iconoID])
  };

  const desHoverIcono = () => {
    setDescripcion("Continue your Gym Challenge!");
  };

  return (
    <>
      <div id="contenedorIconos" className="contenedorIconos">
        <a
          href="#pokedex"
          style={{ textDecoration: "none" }}
          className="optionStyle"
        >
          <div
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

        <a
          href="#pokemon"
          style={{ textDecoration: "none" }}
          className="optionStyle"
        >
          <div
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

        <a
          href="#bag"
          style={{ textDecoration: "none" }}
          className="optionStyle"
        >
          <div
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

        <a
          href="#league_card"
          style={{ textDecoration: "none" }}
          className="optionStyle"
        >
          <div
            onMouseEnter={() => {
              hoverIcono("league_card");
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

        <a
          href="#save"
          style={{ textDecoration: "none" }}
          className="optionStyle"
        >
          <div
            onMouseEnter={() => {
              hoverIcono("save");
            }}
            onMouseLeave={() => desHoverIcono()}
          >
            <div className="iconStyle">
              <span className="iconTextStyle">
                <DeviceFloppy size={150} strokeWidth={1} color="lightgreen" />{" "}
              </span>
            </div>
            <div>
              <span className="optionTextStyle">Save</span>
            </div>
          </div>
        </a>

        <a
          href="#town_map"
          style={{ textDecoration: "none" }}
          className="optionStyle"
        >
          <div
            onMouseEnter={() => {
              hoverIcono("town_map");
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

        <a
          href="#pokemon_camp"
          style={{ textDecoration: "none" }}
          className="optionStyle"
        >
          <div
            onMouseEnter={() => {
              hoverIcono("pokemon_camp");
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

        <a
          href="#mystery_gift"
          style={{ textDecoration: "none" }}
          className="optionStyle"
        >
          <div
            onMouseEnter={() => {
              hoverIcono("mystery_gift");
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

        <a
          href="#vs"
          style={{ textDecoration: "none" }}
          className="optionStyle"
        >
          <div
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

        <a
          href="#options"
          style={{ textDecoration: "none" }}
          className="optionStyle"
        >
          <div
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
    </>
  );
};

export default ContenedorIconos;
