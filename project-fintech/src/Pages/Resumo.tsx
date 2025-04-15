import GraficoVendas from '../Components/GraficoVendas';
import { useData } from '../Context/DataContext';

const resumo = () => {
  const { data } = useData();
  if (data === null) return null;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box" style={{ background: '#373f4e' }}>
          <h2 style={{ color: '#eb4d4b' }}>Vendas</h2>
          <span>
            {data
              .filter((i) => i.status !== 'falha')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className="box" style={{ background: '#373f4e' }}>
          <h2 style={{ color: '#6ab04c' }}>Recebido</h2>
          <span>
            {data
              .filter((i) => i.status === 'pago')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div style={{ background: '#373f4e' }} className="box">
          <h2 style={{ color: '#f9ca24' }}>A receber</h2>
          <span>
            {data
              .filter((i) => i.status === 'processando')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
      <hr className="hr" />
      <GraficoVendas data={data} />
    </section>
  );
};

export default resumo;
