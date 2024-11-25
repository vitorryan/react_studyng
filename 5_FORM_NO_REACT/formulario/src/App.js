import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={
        {name: "Josias", email: "Josias@teste.com", bio: "Sou um editor de video", role: "editor"}
      }/>
    </div>
  );
}

export default App;
