
const Desafio = ({name, age, profession}) => {
  return (
    <div>
        <h4>Detalhes do usuario</h4>
        <p>Nome: {name}</p>
        <p>Profissão: {profession}</p>
        {age >= 18 ? (<p>Pode tirar carteira!</p>) : (<p>Não pode tirar carteira!</p>)}
    </div>
  )
}

export default Desafio