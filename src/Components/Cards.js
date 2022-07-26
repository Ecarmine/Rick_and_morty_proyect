import React from "react";
import Card from "./Card";

function Cards({ allCaracters }) {
  //   console.log(props.name);
  return (
    <>
      <div className="mx-auto row row-cols-1 row-col-sm-3">
        {allCaracters?.map((data) => (
          <Card key={data.id} description={data}></Card>
        ))}
      </div>
    </>
  );
}

export default Cards;
