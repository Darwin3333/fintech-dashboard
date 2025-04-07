import React, { createContext, PropsWithChildren, useState } from 'react';
import { useFetch } from '../Hooks/useFetch';

type IDataContext = {
  //a data retornando é do tipo []
  data: IVenda[] | null;
  loading: boolean;

  error: string | null; //este | eh o ou para tipos o || para execução
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

export type IVenda = {
  //a opi retorna uma lista com objetos.
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartao';
  data: string;
  parcelas: number | null;
};

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
};

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getFullYear());

  return `${yyyy}-${mes}-${dd}`;
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [inicio, setInicio] = useState(getDate(30));
  const [final, setFinal] = useState(getDate(0));

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
