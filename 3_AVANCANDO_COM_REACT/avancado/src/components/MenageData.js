import { useState } from "react";

function MenageData() {
    let AlgumDado = 10

    const [number, setNumber] = useState(10)

    return (
        <div>
            <h3>useState na pratica</h3>
            <div>
                <h6>Sem Hook</h6>
                <p>O numero é {AlgumDado}</p>
                <button onClick={() => AlgumDado=(15)}>Mudar numero para 15</button>
            </div>

            <div>
                <h6>Com hook</h6>
                <p>O numero é {number}</p>
                <button onClick={() => setNumber(15)}>Mudar numero para 15</button>
            </div>
        </div>
    )
}
export default MenageData;