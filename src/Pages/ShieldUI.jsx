import React from "react";
import { FileX, RowInsertTop } from "tabler-icons-react";

const ShieldUI = () => {
  const backgroundStyle = {
    height: "800px",
    backgroundColor: "red",
  };

  const iconStyle = {
    backgroundColor: "white",
    height: '200px',
    width: '200px',
    borderRadius: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
  };

  const iconTextStyle = {
      color: 'green',
  }

  console.log(backgroundStyle);
  return (
    <>
      {/* <div className="container bg-light mt-5" style={backgroundStyle} > */}
      <div>
        <h1>Shield UI</h1>
        <div className="container-fluid d-flex" style={backgroundStyle}>
          <div style={iconStyle}> <span style={iconTextStyle}> Hola</span> </div>
        </div>
      </div>
    </>
  );
};

export default ShieldUI;
