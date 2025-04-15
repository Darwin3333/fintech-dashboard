import { IVenda } from '../Context/DataContext';
import {
  LineChart,
  XAxis,
  Tooltip,
  Line,
  YAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts';

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(' ')[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 1000,
        falha: 300,
        processando: 700,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width={'99%'} height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="pago" strokeWidth={3} stroke="#6ab04c" />
        <Line
          type="monotone"
          dataKey="processando"
          strokeWidth={3}
          stroke="#f9ca24"
        />
        <Line type="monotone" dataKey="falha" stroke="purple" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
