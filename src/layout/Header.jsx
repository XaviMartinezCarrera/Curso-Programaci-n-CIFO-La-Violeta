import banda from '../assets/imagenes/banda.jpg';

export default function Header() {
  return (
    <>
      <header
        class="w3-display-container w3-content w3-wide"
        id="home"
      >
        <img
          class="w3-image"
          src={banda}
          alt="Banda musical tocando en directo"
          width="1000px"
          height="600px"
        />
      </header>
    </>
  );
}
