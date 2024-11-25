const Challenge = () =>{

    const v1 = 6
    const v2 = 4
    const result = v1 + v2


    return(
        <div>
            <div>
                <p>Somando os numeros {v1} + {v2} vamos obter o resultado: {result}</p>
            </div>

            <div>
                <h3>Escolha você os numeros!</h3>
                <button onClick={()=> console.log(result)}>Ver a soma no console</button>
            </div>
        </div>
    )
}
export default Challenge;