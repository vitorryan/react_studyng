//componentes
import TemplateExpression from './components/TemplateExpression';
import FirtsComponent from './components/FirstComponent';
import TreinandoEstruturas from './components/TreineeComponents';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';
//style - CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirtsComponent/>
      <TreinandoEstruturas/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
      <div>
        <h1>Desafio do curso</h1>
        <Challenge/>
      </div>
      
      
    </div>
  );
}

export default App;
