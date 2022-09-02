import "./styles.css";
import { useState } from "react";
import { data } from "./data";
import ListAdder from "./list-adder";

export default function App() {
  const [cars, setCars] = useState(data);
  return (
    <div className="App">
      <ListAdder cars={cars} setCars={setCars} />
      <div>
        {cars.map((model) => (
          <div style={{ border: "2px solid black", margin: "5px" }}>
            <h2>{model.brand}</h2>
            <h4>{model.make}</h4>
            <h5>{model.model}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
