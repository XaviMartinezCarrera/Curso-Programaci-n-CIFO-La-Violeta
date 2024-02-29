import React from 'react';

export default function Card() {
  return (
    <div class="w3-card w3-gray w3-center">
      <div class="w3-panel w3-card w3-light-gray">
      <h2>Busco grupo de rock para tocar la guitarra</h2>
      <h4><strong>Juan</strong></h4>
      <p>Hola, soy Juan y toco la guitarra desde 2010. Vivo en Barcelona y busco un grupo de rock clásico con influencias de bandas de los 60 y 70. Me gustaría hacer bolos y pasarlo bien.</p>
      <button class="w3-button w3-green">Connect</button>
      </div>

      <div class="w3-panel w3-card w3-light-gray">
      <h2>Batería busca grupo pop</h2>
      <h4><strong>Laura</strong></h4>
      <p>Hola, soy Laura y toco la batería 2008. Vivo en Hospitalet y busco un grupo pop con influencias de bandas españolas de los 80 y 90. Quiero ensayar, hacer un disco y buscar conciertos. Saludos!</p>
      <button class="w3-button w3-green">Connect</button>
      </div>

      <div class="w3-panel w3-card w3-light-gray">
      <h2>Soy bajista y quiero iniciar nueva banda de funky</h2>
      <h4><strong>Guillermo</strong></h4>
      <p>Buenas, aquí Guillermo con ganas de un nuevo proyecto musical. Tengo un nivel medio-alto con el bajo y también toco algo la guitarra. Si alguien se anima, me gusta el funky y la música disco.</p>
      <button class="w3-button w3-green">Connect</button>
      </div>
    </div>
    
  );
}
