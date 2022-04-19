import React from "react";
import "./Options.css";

const Options = () => {
  return (
    <>
      <div className="contenedorOptions">
        <div className="contenedorSeleccionOpciones">
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Text Speed</div>
            <div className="contenedorOpcionSeleccion">
              <div className="opcionSeleccion">Slow</div>
              <div className="opcionSeleccion">Normal</div>
              <div className="opcionSeleccion opcionSeleccionada">Fast</div>
            </div>
          </div>
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Battle Effects</div>
            <div className="contenedorOpcionSeleccion">
              <div className="opcionSeleccion">On</div>
              <div className="opcionSeleccion opcionSeleccionada">Off</div>
            </div>
          </div>
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Battle Style</div>
            <div className="contenedorOpcionSeleccion">
              <div className="opcionSeleccion  opcionSeleccionada">Switch</div>
              <div className="opcionSeleccion">Set</div>
            </div>
          </div>
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Sent to Boxes</div>
            <div className="contenedorOpcionSeleccion">
              <div className="opcionSeleccion">Manual</div>
              <div className="opcionSeleccion  opcionSeleccionada">Automatic</div>
            </div>
          </div>
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Give Nicknames</div>
            <div className="contenedorOpcionSeleccion">
              <div className="opcionSeleccion">Give</div>
              <div className="opcionSeleccion  opcionSeleccionada">Don't Give</div>
            </div>
          </div>
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Gyroscope</div>
            <div className="contenedorOpcionSeleccion">
              <div className="opcionSeleccion  opcionSeleccionada">Use</div>
              <div className="opcionSeleccion">Don't Use</div>
            </div>
          </div>
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Vertical Camera Controls</div>
            <div className="contenedorOpcionSeleccion">
              <div className="opcionSeleccion  opcionSeleccionada">Regular</div>
              <div className="opcionSeleccion">Inverted</div>
            </div>
          </div>
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Horizontal Camera Controls</div>
            <div className="contenedorOpcionSeleccion">
              <div className="opcionSeleccion  opcionSeleccionada">Regular</div>
              <div className="opcionSeleccion">Inverted</div>
            </div>
          </div>
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Autosave</div>
            <div className="contenedorOpcionSeleccion">
              <div className="opcionSeleccion">On</div>
              <div className="opcionSeleccion  opcionSeleccionada">Off</div>
            </div>
          </div>
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Casual Controls</div>
            <div className="contenedorOpcionSeleccion">
              <div className="opcionSeleccion">On</div>
              <div className="opcionSeleccion  opcionSeleccionada">Off</div>
            </div>
          </div>
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Show Nicknames</div>
            <div className="contenedorOpcionSeleccion">
              <div className="opcionSeleccion  opcionSeleccionada">Show</div>
              <div className="opcionSeleccion">Don't Show</div>
            </div>
          </div>
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Skip Movies</div>
            <div className="contenedorOpcionSeleccion">
              <div className="opcionSeleccion">On</div>
              <div className="opcionSeleccion  opcionSeleccionada">Off</div>
            </div>
          </div>
          <div className="contenedorOpcion">
            <div className="contenedorOptionName">Background Music</div>
            <div className="contenedorOpcionSeleccion">
              {/* <div className="opcionSeleccion">Regular</div> */}
              <input type="range" className="opcionSeleccionRango"/>
            </div>
          </div>
        </div>
        <div className="contenedorDescripcionOpciones">
          <div className="descripcionOpciones">
            You can chose from different text-scrolling speeds to control how
            quickly messages appear.
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
