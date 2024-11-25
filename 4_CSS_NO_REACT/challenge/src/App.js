import './App.css';
import Cars from './components/Cars';

function App() {
  const carros = [
    {id:1, modelo:"Fusca", ano:1974},
    {id:2, modelo: "Ferrari", ano:2022},
    {id:3, modelo: "Golf", ano:2018}
  ]

  return (
    <div className="App">
      <h1 style={{color:"red", backgroundColor:"gray", textAlign: "center"}}>Desafio do curso</h1>

      {carros.map((car) => (
        <Cars 
        key={car.id}
        modelo={car.modelo}
        ano={car.ano}
        />
      ))}

    </div>
  );
}

export default App;
