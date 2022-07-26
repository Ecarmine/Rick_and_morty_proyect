import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from "./Cards";

function ConectionApi() {
  //creacion de hooks
  const [ricks, setRicks] = useState([]);

  // Url de la api
  const endPoint = "https://rickandmortyapi.com/api/character";

  //   funcion para acceder a los datos
  const getData = () => {
    axios.get(endPoint).then((res) => {
      //   console.log(res.data.results);
      setRicks(res.data.results);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(ricks);

  return (
    <>
      <Cards allCaracters={ricks}></Cards>
    </>
  );
}

export default ConectionApi;
