import React from 'react';

const SelectComponent = ({ data, type, onChange, value }) => {
  return (
    <div>
      <label>{type}</label>
      <select onChange={onChange} value={value}>
        <option value="">Selecione {type}</option>
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;