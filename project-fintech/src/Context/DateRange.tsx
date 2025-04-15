import React, { useState } from 'react';
import DateInput from '../Components/DateInput';
import { useData } from './DataContext';

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form
      className="box flex"
      style={{ background: '#373f4e' }}
      onSubmit={(e) => e.preventDefault()}
    >
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
