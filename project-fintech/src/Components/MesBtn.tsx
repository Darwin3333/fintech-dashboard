import React, { CSSProperties } from 'react';
import { useData } from '../Context/DataContext';

const style: CSSProperties = {
  margin: 'var(--gap-s)',
  padding: 'var(--gap) var(--gap-s)',
  backgroundColor: 'var(--color-3)',
  border: 'none',
  borderRadius: 'var(--gap)',
  color: 'var(--color-2)',
  fontWeight: '600',
  textTransform: 'capitalize',
};

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getFullYear());

  return `${yyyy}-${mes}-${dd}`;
}

function nomeMes(n: number) {
  //retorna o mes formatado
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

const MesBtn = ({ n }: { n: number }) => {
  const { setInicio, inicio, setFinal } = useData();

  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() - n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); //0 representa o dia anterior do mês. || 0-6 doming a sabado

    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <button style={style} onClick={() => setMes(n)}>
      {nomeMes(n)}
    </button>
  );
};

export default MesBtn;
