import './style.css';
import Resumo from './Pages/Resumo';
import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import { DataContextProvider } from './Context/DataContext';
import Vendas from './Pages/Vendas';

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
          <Vendas />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
