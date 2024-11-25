import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';


function App() {
  const n = 15;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de component */}
      <MyComponent/>
      <p>Paragrafo do App.js</p>

      {/* Inline CSS */}
      <p 
        style={{
          color:"blue", 
          backgroundColor:"gray", 
          padding:"25px", 
          border: "1px solid red"
        }}>Paragrafo estilizado inline</p>

        {/* CSS Inline style dinâmico */}
        <p style={n <= 10 ? {color: "blue"} : {color: "purple"}}>
          Paragrafo inline style dinâmico</p>

        {/* CSS Modules */}
        <Title/>
    </div>
  );
}

export default App;
