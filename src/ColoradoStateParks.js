import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import RMFunctions from "./parks/RockyMountain"; // Import RMFunctions from the correct path

function ColoradoStateParks() {
  const numberOfParks = howManyParks();

  console.log(RMFunctions.trees); // Logs ["Aspen", "Pine"]

  const wildlife = RMFunctions.wildlife(); // Call the wildlife function
  console.log(wildlife); // Logs "Elk, Bighorn Sheep, Moose"

  const elevation = RMFunctions.elevation(); // Call the elevation function
  console.log(elevation); // Logs "High elevation"

  return (
    <div>
      <div>
        <h1>Colorado State Parks!</h1>
      </div>
      <MesaVerde />
      <div>
        {/* Display the values of `trees`, `wildlife`, and `elevation` */}
        <p>Trees: {RMFunctions.trees.join(", ")}</p>
        <p>Wildlife: {wildlife}</p>
        <p>Elevation: {elevation}</p>
      </div>
      {/* Display the number of parks */}
      <p>Number of Parks: {numberOfParks}</p>
    </div>
  );
}

export default ColoradoStateParks;
