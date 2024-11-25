import { useState } from 'react';
import './App.css';
import Coffee from './assets/coffe.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import MenageData from './components/MenageData';
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails';
import LoopCar from './components/LoopCar';
import Fragments from './components/Fragments';
import Container from './components/Container';
import Desafio from './components/Desafio';
import ShowFunction from './components/ShowFunction';
// import ChangeMessageState from './components/ChangeMessageState';
// import Message from './components/Message';


function App() {
  const name = "vitin variavel"
  const [useName] = useState("Victor state")
  const carros = [
    {id: 1, brand: "Ferrari", color: "Red", km: 0, newCar: true},
    {id: 2, brand: "Fiat", color: "amarelo", km: 123232, newCar: false},
    {id: 3, brand: "Lambo", color: "Roxa", km: 30, newCar: false}
  ]

  //Função dentro do componente
  function funcao() {
    console.log("Recebaaaaaaaa")
  }

  // State lift

  // const [message, setMessage] = useState("")
  // const handlleMessage = (msg) => {
  //   setMessage(msg)
  // }

  //Desafio
  const user = [
    {id:1, name:"Vitor", age:23, profession:"Tester"},
    {id:2, name:"Vitoria", age:20, profession:"Front-End"},
    {id:3, name:"Vinicius", age:19, profession:"Back-End"},
    {id:4, name:"Miguel", age:17, profession:"Estudante"}
  ]

  return (
    <div className="App">
      <div>
        <h1>Avançando em React</h1>
      </div>

      {/* Usando imagem que está na pasta public */}
      <div>
        <img className='imgCoffe' src="/pexels-coffe.jpg" alt="coffe shop" />
      </div>

      {/* Usando imagem que está na pasta assets */}
      <div>
        <img className='imgComponente' src={Coffee} alt="Coffe" />
      </div>

      <div>
        <MenageData/>
      </div>

      <div>
        <ListRender/>
      </div>

      <div>
        <ConditionalRender/>
      </div>

      <div>
        <ShowUserName name="vitin"/> {/*Pegando o valor e jogando dentro do componente*/}

        <ShowUserName name={name}/> {/*Pegando o valor de uma variavel dentro do app.js*/}

        <ShowUserName name={useName}/>
        
        {/* Desestruturando a props */}
        <CarDetails brand="VW" km={10000} color="Red" modelo="Fusca"/>

        {/* Reaproveitando o componente */}
        <CarDetails brand="Chevrolet" km={20983} color="Cinza" modelo="Celta"/>
        <CarDetails brand="Fiat" km={34583} color="Branco" modelo="Uno"/>
        <CarDetails brand="Honda" km={0} color="Preto" modelo="Civic" newCar={true}/>
      </div>

        {/* Usando um componente em loop */}
      <div>
        <h3>Loop de componente</h3>
        {carros.map((car) =>(
          <LoopCar 
          key={car.id}
          brand={car.brand}
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}/>
        ))}
      </div>

      {/* Transformando dois elementos em elemento pai */}
      <div>
        <Fragments prop="Teste"/>
      </div>

      {/* Usando HTML dentro de um componente usando o children */}
      <Container>
        <p>Este é o paragrafo do container</p>
      </Container>

      {/*Passando função criado no app.js para dentro do componente*/}
      <ShowFunction myFunction={funcao}/>

      {/*Usando o state lift*/}
      {/* <Message msg={message}/>
      <ChangeMessageState handlleMessage={setMessage}/> */}


      {/* Desafio */}
      <h3>DESAFIO</h3>
        <div>
          {user.map((detail) => (
            <Desafio
            key={detail.id}
            name={detail.name}
            age={detail.age}
            profession={detail.profession}
            />
          ))}
        </div>


    </div>
  );
}

export default App;
