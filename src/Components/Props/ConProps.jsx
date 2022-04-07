import React from "react";

function ConProps(props) {
  const { texto, objeto, variante } = props;

  console.log(props);
  return (
    <div className="container-fluid" >
      <div className="card">
        <img
          src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark-700x235.png"
          alt=""
          className="card-img-top p-5"
        />
        <div className="card-body">
          <h5 className="card-title">{objeto.nombre}</h5>
          <p className="card-text">{objeto.descripcion}</p>
          <a href="#" className={variante}>
            Saber más...
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConProps;
