import React, {useState} from "react";
import "./Pokemon.css";
import metapod from "../../../Assets/pkmnIcons/metapod.png";
import charizard from "../../../Assets/pkmnIcons/charizard.png";
import venusaur from "../../../Assets/pkmnIcons/venusaur.png";
import torkoal from "../../../Assets/pkmnIcons/torkoal.png";
import rotom from "../../../Assets/pkmnIcons/rotom-heat.png";
import sableye from "../../../Assets/pkmnIcons/sableye.png";
import { Mars, Venus } from "tabler-icons-react";

const Pokemon = () => {

  
  const listaPokemon = {
    metapod: "https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/metapod.gif", 
    charizard:  "https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/charizard.gif",
    venusaur: "https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/venusaur.gif",
    torkoal: "https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/torkoal.gif",
    rotom: "https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/rotom-heat.gif",
    sableye: "https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/sableye.gif",
  }
  
  const [pkmnSeleccionado, setPkmnSeleccionado] = useState("");

  const handleSeleccion = (pkmn) => {
    const sprite = listaPokemon[pkmn];
    setPkmnSeleccionado(sprite);
  }

  return (
    <>
      <div className="contenedorSeccionPokemon">
        <div className="contenedorListadoPokemon">
          <div className="pkmn" onClick={()=>handleSeleccion("metapod")}>
            <div className="pkmnIcono">
              <img src={metapod} alt="Sr. Presidente"  style={{width: "60px"}}/>
            </div>
            <div className="pkmnInfo">
              <div className="pkmnNameGender">
                <span className="pkmnName">Metapod</span>
                <span className="pkmnGender">
                  <Venus size={20} color="Red" />
                </span>
              </div>
              <div className="barraHP">

              </div>
              <div className="pkmnStats">
                <span className="pkmnHP">125/125</span>
                <span className="pkmnLevel">Lv. 63</span>
              </div>
            </div>
          </div>
          <div className="pkmn" onClick={()=>handleSeleccion("charizard")}>
            <div className="pkmnIcono">
              <img src={charizard} alt="el consentido"  style={{width: "60px"}}/>
            </div>
            <div className="pkmnInfo">
              <div className="pkmnNameGender">
                <span className="pkmnName">Charizard</span>
                <span className="pkmnGender">
                  <Venus size={20} color="Red" />
                </span>
              </div>
              <div className="barraHP">

              </div>
              <div className="pkmnStats">
                <span className="pkmnHP">125/125</span>
                <span className="pkmnLevel">Lv. 63</span>
              </div>
            </div>
          </div>
          <div className="pkmn" onClick={()=>handleSeleccion("venusaur")}>
            <div className="pkmnIcono">
              <img src={venusaur} alt=""  style={{width: "60px"}}/>
            </div>
            <div className="pkmnInfo">
              <div className="pkmnNameGender">
                <span className="pkmnName">Venusaur</span>
                <span className="pkmnGender">
                  <Mars size={20} color="blue" />
                </span>
              </div>
              <div className="barraHP">

              </div>
              <div className="pkmnStats">
                <span className="pkmnHP">125/125</span>
                <span className="pkmnLevel">Lv. 63</span>
              </div>
            </div>
          </div>
          <div className="pkmn" onClick={()=>handleSeleccion("torkoal")}>
            <div className="pkmnIcono">
              <img src={torkoal} alt=""  style={{width: "60px"}}/>
            </div>
            <div className="pkmnInfo">
              <div className="pkmnNameGender">
                <span className="pkmnName">Torkoal</span>
                <span className="pkmnGender">
                  <Venus size={20} color="Red" />
                </span>
              </div>
              <div className="barraHP">

              </div>
              <div className="pkmnStats">
                <span className="pkmnHP">125/125</span>
                <span className="pkmnLevel">Lv. 63</span>
              </div>
            </div>
          </div>
          <div className="pkmn" onClick={()=>handleSeleccion("rotom")}>
            <div className="pkmnIcono">
              <img src={rotom} alt=""  style={{width: "60px"}}/>
            </div>
            <div className="pkmnInfo">
              <div className="pkmnNameGender">
                <span className="pkmnName">Rotom</span>
                <span className="pkmnGender">
                  <Venus size={20} color="Red" />
                </span>
              </div>
              <div className="barraHP">

              </div>
              <div className="pkmnStats">
                <span className="pkmnHP">125/125</span>
                <span className="pkmnLevel">Lv. 63</span>
              </div>
            </div>
          </div>
          <div className="pkmn" onClick={()=>handleSeleccion("sableye")}>
            <div className="pkmnIcono">
              <img src={sableye} alt=""  style={{width: "60px"}}/>
            </div>
            <div className="pkmnInfo">
              <div className="pkmnNameGender">
                <span className="pkmnName">Sableye</span>
                <span className="pkmnGender">
                  <Venus size={20} color="Red" />
                </span>
              </div>
              <div className="barraHP">

              </div>
              <div className="pkmnStats">
                <span className="pkmnHP">125/125</span>
                <span className="pkmnLevel">Lv. 63</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedorSpritePokemon">
          <img src={pkmnSeleccionado} alt="acá va el sprite" />
        </div>
      </div>
    </>
  );
};

export default Pokemon;
