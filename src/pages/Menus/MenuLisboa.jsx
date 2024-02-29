import "w3-css/w3.css";
import React, { useState } from "react";

export default function MenuLisboa() {

  const [count, setCount] = useState(0);
  console.log(count);
  
  return (
    <>
      <div class="w3-container">

        <div class="w3-panel w3-card w3-yellow">
         
            <h3>Juan García</h3>

            <h5>Guitarrista</h5>
            <ul>
              <li>Rock</li>
              <li>Nivel medio, autodidacta</li>
              <li>Busco grupo para hacer bolos</li>
            </ul>

              <button class="w3-button w3-green">Connect</button>
              <div class="w3-container">
      
              <button class="w3-button w3-black w3-right" onClick={() => setCount(count + 1)}>
              Likes {count}
              </button>
            </div>
            </div>

            </div>

    </>
  );
}
