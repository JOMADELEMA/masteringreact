import React from 'react';
import './Save.css';
import metapod from "../../../Assets/pkmnIcons/metapod.png";
import charizard from "../../../Assets/pkmnIcons/charizard.png";
import venusaur from "../../../Assets/pkmnIcons/venusaur.png";
import torkoal from "../../../Assets/pkmnIcons/torkoal.png";
import rotom from "../../../Assets/pkmnIcons/rotom-heat.png";
import sableye from "../../../Assets/pkmnIcons/sableye.png";

const Save = () => {
  return (
    <>
    <div className="contenedorSave">
      <div className="contenedorMedallaSave">
        <div className='medalla'></div>
      </div>
      <div className="contenedorInfoSave">
        <div className="contenedorParty flex">
          <img src={metapod} alt="" />
          <img src={charizard} alt="" />
          <img src={venusaur} alt="" />
          <img src={torkoal} alt="" />
          <img src={rotom} alt="" />
          <img src={sableye} alt="" />
        </div>
        <div className="contenedorTexto">
          <div className="currentTime">
            <div className='tituloSave'>Current Time</div>
            <div className='textoSave'>04/15/2022 17:40</div>
          </div>
          <div className="currentLocation">
            <div className='tituloSave'>Current Location</div>
            <div className='textoSave'>Battle Tower</div>
          </div>

          <div className="playTime">
            <div className='tituloSave'>Play Time</div>
            <div className='textoSave'>244.45</div>
          </div>
          <div className="pokedexInfo">
            <div className='tituloSave'>Pokedex</div>
            <div className='textoSave'>400 Pokemon</div>
          </div>
        </div>
        <div className="contenedorBotones">
          <div className='buttonSave'>Save your Progress</div>
          <div className='buttonSave'>Back to your adventure</div>
        </div>
      </div>
      <div className="contenedorLastSave">
        <span>Last saved   04/15/2022  16:50</span>
      </div>
    </div>
    
    
    
    
    </>
  )
}

export default Save