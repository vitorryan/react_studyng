const ChangeMessageState = ({handlleMessage}) => {
    const messages = ["oi", "olá", "oi, tudo bem"]

  return (
    <div>
        <button onClick={() => handlleMessage(messages[0])}>1</button>
        <button onClick={() => handlleMessage(messages[1])}>2</button>
        <button onClick={() => handlleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState