import MesBtn from './MesBtn';
//componente Meses retorna 3 componentes MesBtn,
const Meses = () => {
  return (
    <div className="flex">
      <MesBtn n={0} />
      <MesBtn n={-1} />
      <MesBtn n={-2} />
      <MesBtn n={-3} />
    </div>
  );
};

export default Meses;
