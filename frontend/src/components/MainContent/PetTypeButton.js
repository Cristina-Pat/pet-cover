import React from 'react';

function PetTypeButton({ type, selected, onClick }) {
  return (
    <button 
      className={`pet-type-button ${selected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      {type}
    </button>
  );
}

export default PetTypeButton;
