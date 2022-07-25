import axios from "axios";
import React, { useState, useEffect } from "react";

function Conection_api() {
  //creacion de hooks
  const [ricks, setRicks] = useState([]);

  // Url de la api
  const endPoint = "https://rickandmortyapi.com/api/character";

  //   funcion para acceder a los datos
  const getData = () => {
    axios.get(endPoint).then((res) => {
      console.log(res.data);
      setRicks(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <></>;
}

export default Conection_api;
