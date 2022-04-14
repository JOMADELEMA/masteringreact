import { getByPlaceholderText } from "@testing-library/react";
import React from "react";
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
import img from '../Assets/fondoPokemon.png'

const ShieldUI = () => {
  const backgroundStyle = {
    // height: "800px",
    // backgroundColor: "#d22",
    // position: "relative",
    background: `url(${img})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    height: "800px",
  };


//   const darkBackgroundStyle = {
//     width: "150px",
//     height: 0,
//     borderLeft: "0px solid transparent",
//     borderRight: "250px solid transparent",
//     borderTop: "800px solid #900",
//     position: "absolute",
//   };

//   const lightBackgroundStyle = {
//     width: 0,
//     height: 0,
//     borderLeft: "0px solid transparent",
//     borderRight: "140px solid transparent",
//     borderTop: "450px solid #aaa",
//     position: "absolute",
//   };
  
  const contenedorIconos = {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "25px",
    paddingBottom: "25px",
    position: "relative",
    zIndex: "10",
  };

  const optionStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "25px 10px 25px 10px",
  };

  const optionTextStyle = {
    color: "#fff",
    fontWeight: "bolder",
    fontSize: "25px",
  };

  const iconStyle = {
    backgroundColor: "white",
    height: "175px",
    width: "175px",
    borderRadius: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 1px 5px 0 #222",
  };

  const iconTextStyle = {
    color: "green",
    fontWeight: "bold",
    fontSize: "35px",
  };

  const contenedorDescription = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const descriptionStyle = {
    width: "500px",
    height: "100px",
    backgroundColor: "#444",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const descriptionTextStyle = {
    color: "#ddd",
    fontWeight: "bolder",
  };

  return (
    <>
      <div className="container-fluid" style={backgroundStyle}>
        {/* <div style={backgroundStyle}> */}
        <div>
          {/* <div id="fondoOscuro" style={darkBackgroundStyle}></div>
          <div id="fondoClaro" style={lightBackgroundStyle}></div> */}
          <div id="contenedorIconos" style={contenedorIconos}>
            <div style={optionStyle}>
              <div style={iconStyle}>
                <span style={iconTextStyle}>
                  <Book size={150} strokeWidth={1} color="orange" />
                </span>
              </div>
              <div>
                <p style={optionTextStyle}>Pokedex</p>
              </div>
            </div>

            <div style={optionStyle}>
              <div style={iconStyle}>
                <span style={iconTextStyle}>
                  <Pokeball size={150} strokeWidth={1} color="red" />
                </span>
              </div>
              <div>
                <span style={optionTextStyle}>Pokemon</span>
              </div>
            </div>
            <div style={optionStyle}>
              <div style={iconStyle}>
                <span style={iconTextStyle}>
                  <Briefcase size={150} strokeWidth={1} color="orange" />{" "}
                </span>
              </div>
              <div>
                <span style={optionTextStyle}>Bag</span>
              </div>
            </div>
            <div style={optionStyle}>
              <div style={iconStyle}>
                <span style={iconTextStyle}>
                  <Id size={150} strokeWidth={1} color="blue" />{" "}
                </span>
              </div>
              <div>
                <span style={optionTextStyle}>League Card</span>
              </div>
            </div>
            <div style={optionStyle}>
              <div style={iconStyle}>
                <span style={iconTextStyle}>
                  <DeviceFloppy size={150} strokeWidth={1} color="lightgreen" />{" "}
                </span>
              </div>
              <div>
                <span style={optionTextStyle}>Save</span>
              </div>
            </div>
            <div style={optionStyle}>
              <div style={iconStyle}>
                <span style={iconTextStyle}>
                  <MapPin size={150} strokeWidth={1} color="green" />
                </span>
              </div>
              <div>
                <span style={optionTextStyle}>Town Map</span>
              </div>
            </div>
            <div style={optionStyle}>
              <div style={iconStyle}>
                <span style={iconTextStyle}>
                  <Tent size={150} strokeWidth={1} color="#ffbf00" />
                </span>
              </div>
              <div>
                <span style={optionTextStyle}>Pokemon Camp</span>
              </div>
            </div>
            <div style={optionStyle}>
              <div style={iconStyle}>
                <span style={iconTextStyle}>
                  <Gift size={150} strokeWidth={1} color="purple" />
                </span>
              </div>
              <div>
                <span style={optionTextStyle}>Mystery Gift</span>
              </div>
            </div>
            <div style={optionStyle}>
              <div style={iconStyle}>
                <span style={iconTextStyle}>
                  <Tournament size={150} strokeWidth={1} color="darkgreen" />
                </span>
              </div>
              <div>
                <span style={optionTextStyle}>VS</span>
              </div>
            </div>
            <div style={optionStyle}>
              <div style={iconStyle}>
                <span style={iconTextStyle}>
                  <Settings size={150} strokeWidth={1} color="darkblue" />
                </span>
              </div>
              <div>
                <span style={optionTextStyle}>Options</span>
              </div>
            </div>
          </div>
          <div id="contenedorDescripcion" style={contenedorDescription}>
            <div style={descriptionStyle}>
              <span style={descriptionTextStyle}>
                Continue your gym challenge!
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShieldUI;
