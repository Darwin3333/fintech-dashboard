import React from 'react';
import { IVenda } from '../Context/DataContext';

const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="venda box">
      <a style={{ fontFamily: 'monospace' }} href="">
        {venda.id}
      </a>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  );
};

export default VendaItem;
