import instrumentos from '../assets/imagenes/instrumentos.jpg';


export default function About (){


    return (
      <>
        <div
          class="w3-center w3-padding-64"
          style={{ width: "60%", margin: "auto" }}
          id="about"
        >
          

          <div class="w3-col w3-padding-large">
            <h1 class="w3-center">About AppMusic</h1>
            <h5 class="w3-center w3-text-black">Music since 2024</h5>
            <p class="w3-large w3-text-black">
              AppMusic es una web creada para facilitar el proceso de creación de una banda, poniendo en contacto a músicos de una misma zona geográfica. Ha sido diseñada por Xavi Martínez en 2024. Se trata de un proyecto para el curso de programación web realizado en el CIFO La Violeta de Barcelona. Es un principio de proyecto clonado de otro, y variando alguna de sus partes y componentes.
            </p>

            <div class="w3-padding-large w3-hide-small">
            <img
              src={instrumentos}
              class="w3-round w3-image w3-opacity-min"
              alt="Instrumentos musicales"
              width="600"
              height="750"
            />
          </div>
          
            <p class="w3-large w3-text-grey w3-hide-medium">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum consectetur adipiscing
              elit, sed do eiusmod temporincididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </>
    );
}