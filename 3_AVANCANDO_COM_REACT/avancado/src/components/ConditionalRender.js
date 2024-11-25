import { useState } from "react"

function ConditionalRender() {
    const [x] = useState(true);

    const [name, setName] = useState("vector");

  return (
    <div>
        <h3>ConditionalRender</h3>
        {x && <p>O valor de X é true</p>}
        {!x && <p>O valor de X é false</p>}
        
        <h3>if e else no react</h3>
        <p>Usando if ternario:</p>
        {name === "Vitor" ? (<p>O nome é Vitor!</p>) : (<p>Nome não foi encontrado</p>)}
        <button onClick={() => setName("Vitor")}>Trocar o nome</button>
    </div>
  )
}

export default ConditionalRender