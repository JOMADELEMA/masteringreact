import React from "react";
import "./VS.css";
import { SoccerField, Atom, Pokeball } from "tabler-icons-react";

const VS = () => {
  return (
    <>
      <div className="contenedorVS">
        <div className="barraInfo">
          <div className="textoBarraInfo">
            Local Comunication
            <br />
            Gathering data of people passed by...
          </div>
          <div className="iconoBarraInfo">
            <Pokeball size={50} strokeWidth={1}/>
          </div>
        </div>
        <div className="contenedorBotonesVS">
          <div className="contenedorBattleStadium">
            <div className="iconoBattleStadium">
              <SoccerField size={75} strokeWidth={1}/>
            </div>
            <div className="textoBattleStadium">Battle Stadium</div>
          </div>

          <div className="contenedorLiveCompetition">
            <div className="iconoLiveCompetition">
              <Atom size={75} strokeWidth={1}/>
            </div>
            <div className="textoLiveCompetition">Live Competition</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VS;
