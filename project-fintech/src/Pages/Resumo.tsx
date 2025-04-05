import React from 'react';
import { useData } from '../Context/DataContext';

const resumo = () => {
  const { data } = useData();

  return <div>Resumo</div>;
};

export default resumo;
