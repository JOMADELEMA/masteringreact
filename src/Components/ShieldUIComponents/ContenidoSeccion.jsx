import React from "react";
import { Crown } from "tabler-icons-react";
import "./ContenidoSeccion.css";
import hoothootIcon from "../../Assets/pkmnIcons/hoothoot.png";
import grubbinIcon from "../../Assets/pkmnIcons/grubbin.png";
import metapodIcon from "../../Assets/pkmnIcons/metapod.png";
import skorupiIcon from "../../Assets/pkmnIcons/skorupi.png";

const ContenidoSeccion = () => {
  const pkmn1 = {
    icon: hoothootIcon,
    number: "019",
    name: "Hoothoot",
    dexStatus: true,
  };
  const pkmn2 = {
    icon: grubbinIcon,
    number: "016",
    name: "Grubbin",
    dexStatus: true,
  };
  const pkmn3 = {
    icon: metapodIcon,
    number: "014",
    name: "Metapod",
    dexStatus: false,
  };
  const pkmn4 = {
    icon: skorupiIcon,
    number: "285",
    name: "Skorupi",
    dexStatus: true,
  };

  return (
    <>
      <div
        className="contenidoSeccionPokedex"
        style={{ height: "700px", border: "solid black", borderRadius: "10px" }}
      >
        <div className="dex">
          <div className="dexName">
            <span>Pokedex</span>
          </div>
          <div className="dexProgress">
            <div className="caughtSeen">
              <Crown color="orange" />
              <span>Caught</span>
              <span>400</span>
            </div>
            <div className="caughtSeen">
              <Crown color="orange" />
              <span>Seen</span>
              <span>400</span>
            </div>
          </div>
        </div>
        <div className="dex">
          <div className="dexName">
            <span>Isle of Armor Pokedex</span>
          </div>
          <div className="dexProgress">
            <div className="caughtSeen">
              <Crown color="orange" />
              <span>Caught</span>
              <span>211</span>
            </div>
            <div className="caughtSeen">
              <Crown color="orange" />
              <span>Seen</span>
              <span>211</span>
            </div>
          </div>
        </div>
        <div className="dex">
          <div className="dexName">
            <span>Crown Tundra Pokedex</span>
          </div>
          <div className="dexProgress">
            <div className="caughtSeen">
              <Crown color="orange" />
              <span>Caught</span>
              <span>210</span>
            </div>
            <div className="caughtSeen">
              <Crown color="orange" />
              <span>Seen</span>
              <span>210</span>
            </div>
          </div>
        </div>

        <div className="dexRecomendations">
          <div className="dexRecomendationTitle"> Current Recomendation</div>
          <div className="dexRecomendationBody">
            <div className="pkmnIcon">
              <img src={pkmn1.icon} alt="hoothoot" style={{ width: "75px" }} />
            </div>
            <div className="pkmnNumber">No. {pkmn1.number}</div>
            <div className="pkmnName">{pkmn1.name}</div>
            <div className="pkmnDexStatus">
              {pkmn1.dexStatus ? "Caugth" : "notCaugth"}
            </div>
          </div>

          <div className="dexRecomendationBody">
            <div className="pkmnIcon">
              <img src={pkmn2.icon} alt="grubbin" style={{ width: "75px" }} />
            </div>
            <div className="pkmnNumber">No. {pkmn2.number}</div>
            <div className="pkmnName">{pkmn2.name}</div>
            <div className="pkmnDexStatus">
              {pkmn1.dexStatus ? "Caugth" : "notCaugth"}
            </div>
          </div>

          <div className="dexRecomendationBody">
            <div className="pkmnIcon">
              <img src={pkmn3.icon} alt="metapod" style={{ width: "75px" }} />
            </div>
            <div className="pkmnNumber">No. {pkmn3.number}</div>
            <div className="pkmnName">{pkmn3.name}</div>
            <div className="pkmnDexStatus">
              {pkmn1.dexStatus ? "Caugth" : "notCaugth"}
            </div>
          </div>

          <div className="dexRecomendationBody">
            <div className="pkmnIcon">
              <img src={pkmn4.icon} alt="skorupi" style={{ width: "75px" }} />
            </div>
            <div className="pkmnNumber">No. {pkmn4.number}</div>
            <div className="pkmnName">{pkmn4.name}</div>
            <div className="pkmnDexStatus">
              {pkmn1.dexStatus ? "Caugth" : "notCaugth"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContenidoSeccion;
