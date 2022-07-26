import React from "react";

function Card({ description }) {
  return (
    <>
      <div
        className="card mb-3 my-3 ms-5"
        style={{ width: "600px", height: "220px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={description.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title fw-bold">Nombre: {description.name}</h3>
              <p className="card-text fw-bold fs-6">
                <span>
                  Especie: {description.species} - Estado: {description.status}
                </span>
                {description.status === "Alive" ? (
                  <span
                    className="spinner-grow text-success"
                    style={{
                      width: "0.9rem",
                      height: "0.9rem",
                      marginBottom: "0.1rem",
                      marginLeft: "10px",
                    }}
                  >
                    <span className="visually-hidden"></span>
                  </span>
                ) : (
                  <span
                    className="spinner-grow text-danger"
                    style={{
                      width: "0.9rem",
                      height: "0.9rem",
                      marginBottom: "0.1rem",
                      marginLeft: "10px",
                    }}
                  >
                    <span className="visually-hidden"></span>
                  </span>
                )}
              </p>
              <p className="card-text fs-6 text-muted">
                Última ubicación conocida: {description.location.name}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Origen: {description.origin.name}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
