import React from "react";
import "./LeagueCard.css";
import { Notebook, Barcode, Shield, Star } from "tabler-icons-react";

const LeagueCard = () => {
  return (
    <>
      <div className="contenedorLeagueCard">
        <div className="opciones">
          <div className="opcionIcono">
            <Notebook size={50} />
          </div>
          <div className="opcionIcono">
            <Barcode size={50} />
          </div>
        </div>
        <div className="trainerCard">
          <div className="cardIcon">
            <Shield size={75} strokeWidth={1} />
          </div>
          <div className="cardNumber">
            <span>8</span>
          </div>
          <div className="cardStars flex">
            <Star size={25} />
            <Star size={25} />
            <Star size={25} />
            <Star size={25} />
          </div>
          <div className="cardPlayerName">
            <span>JOMADELEMA</span>
          </div>
        </div>
        <div className="contenedorInfo">
          <div className="medallas">
            <div className="contenedorMedallas"></div>
          </div>
          <div className="printedOn">
            <div className="tituloSegmento">Printed On</div>
            <div className="textoSegmento">11/18/2019 10:21</div>
          </div>
          <div className="playerMoney">
            <div className="playerPokeDolars">
              <div className="tituloSegmento">Money</div>
              <div className="textoSegmento">p38,242</div>
            </div>
            <div className="playerBP">
              <div className="tituloSegmento">BP</div>
              <div className="textoSegmento">12</div>
            </div>
            <div className="playerWatts">
              <div className="tituloSegmento">Watts</div>
              <div className="textoSegmento">1,380 W</div>
            </div>

            <div></div>
          </div>
          <div className="playerLevel">
            <div className="playerLevelTrain">
              Pokemon of up to Lv. 50 will listen to this Trainer's requests.
            </div>
            <div className="playerLevelCatch">
              This Trainer can catch pokemon of up to Lv. 35.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeagueCard;
