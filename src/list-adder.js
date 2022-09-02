import { React, useState } from "react";
export default function ListAdder({ cars, setCars }) {
  const [car, setCar] = useState({
    brand: "",
    make: "",
    model: ""
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "5px",
        width: "20vw",
        height: "20vh",
        justifyContent: "space-between",
        marginLeft: "39.5vw"
      }}
    >
      <input
        value={car.brand}
        onChange={(e) => {
          setCar((car) => ({ ...car, brand: e.target.value }));
        }}
        type="text"
        placeholder="Enter Car Brand"
      ></input>{" "}
      <input
        value={car.make}
        onChange={(e) => {
          setCar((car) => ({ ...car, make: e.target.value }));
        }}
        type="text"
        placeholder="Enter Car Make"
      ></input>{" "}
      <input
        value={car.model}
        onChange={(e) => {
          setCar((car) => ({ ...car, model: e.target.value }));
        }}
        type="number"
        placeholder="Enter Car Model"
      ></input>{" "}
      <button
        onClick={() => {
          if (car.brand && car.make && car.model) {
            setCars((Cars) => [...Cars, car]);
          }
        }}
      >
        Add To List
      </button>
    </div>
  );
}
