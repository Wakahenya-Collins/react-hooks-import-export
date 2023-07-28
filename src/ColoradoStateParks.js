import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";

function ColoradoStateParks() {
  const numberOfParks = howManyParks();

  return (
    <div>
      <div>
        <h1>Colorado State Parks!</h1>
      </div>
      <MesaVerde />
      <div>
        {/* Display the values of `trees` and `wildlife` */}
        <p>{trees}</p>
        <p>{wildlife()}</p> {/* Call the function to log the wildlife to the console */}
      </div>
      {/* Display the number of parks */}
      <p>{numberOfParks}</p>
    </div>
  );
}

export default ColoradoStateParks;