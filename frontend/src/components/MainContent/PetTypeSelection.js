import React, { useState } from 'react';
import PetTypeButton from './PetTypeButton';

function PetTypeSelection() {
  const [selectedPetType, setSelectedPetType] = useState('Cat');

  return (
    <div className="pet-type-selection">
      {['Cat', 'Dog', 'Rabbit', 'Horse', 'Rider'].map(type => (
        <PetTypeButton 
          key={type} 
          type={type} 
          selected={type === selectedPetType} 
          onClick={() => setSelectedPetType(type)} 
        />
      ))}
    </div>
  );
}

export default PetTypeSelection;
