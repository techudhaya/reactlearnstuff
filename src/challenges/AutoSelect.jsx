import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    (
      <div className='m-5'>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />          
      </div>
    )

  );
}