import React from "react";
import "./MysteryGift.css";
import { Gift } from "tabler-icons-react";

const MysteryGift = () => {
  return (
    <>
      <div className="contenedorMysteryGift">
        <div className="contenedorBotones">
          <div className="botonMysteryGift">Get a Mystery Gift</div>
          <div className="botonMysteryGift">Get the Wild Area News</div>
          <div className="botonMysteryGift">
            Take a Stroll with Poké Ball Plus
          </div>
        </div>
        <div className="giftIcon">
          <Gift size={400}/>
        </div>
      </div>
    </>
  );
};

export default MysteryGift;
