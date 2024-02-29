import React, { useState } from 'react';

export default function FilterMusician() {
  // Estado para almacenar la lista de músicos
  const [musicians, setMusicians] = useState([
    { id: 1, name: 'John', instrument: 'Guitar' },
    { id: 2, name: 'Anna', instrument: 'Piano' },
    { id: 3, name: 'Mike', instrument: 'Drums' },
    { id: 4, name: 'Sarah', instrument: 'Guitar' },
    { id: 5, name: 'Laura', instrument: 'Piano' },
    { id: 6, name: 'Thom', instrument: 'Drums' },
    { id: 7, name: 'Xavi', instrument: 'Guitar' },
    { id: 8, name: 'Agustín', instrument: 'Piano' },
    { id: 9, name: 'Ray', instrument: 'Bass' },
    { id: 10, name: 'Max', instrument: 'Singer' },
    { id: 11, name: 'Carlos', instrument: 'Singer' },
    { id: 12, name: 'Rubén', instrument: 'Bass' },
  ]);

  // Estado para almacenar el instrumento seleccionado en el filtro
  const [selectedInstrument, setSelectedInstrument] = useState('all');

  // Función para manejar el cambio en el filtro de instrumentos
  const handleInstrumentChange = (e) => {
    setSelectedInstrument(e.target.value);
  };

  // Función para filtrar músicos según el instrumento seleccionado
  const filteredMusicians = selectedInstrument === 'all' ? musicians : musicians.filter(musician => musician.instrument === selectedInstrument);

  return (
    <div>
      {/* Filtro de instrumentos */}
      <select value={selectedInstrument} onChange={handleInstrumentChange}>
        <option value="all">Todos los instrumentos</option>
        <option value="Guitar">Guitarra</option>
        <option value="Bass">Bajo</option>
        <option value="Piano">Piano</option>
        <option value="Drums">Batería</option>
        <option value="Singer">Cantante</option>        
        {/* Agrega más opciones de instrumentos según necesites */}
      </select>
      
      {/* Lista de músicos filtrados */}
      <ul>
        {filteredMusicians.map(musician => (
          <li key={musician.id}>{musician.name} - {musician.instrument}</li>
        ))}
      </ul>
    </div>
  );
}
