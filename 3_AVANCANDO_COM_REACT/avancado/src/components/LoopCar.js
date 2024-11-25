function LoopCar({brand, color, km, newCar}) {
  return (
    <div>
        <h6>Detalhes do Carro</h6>
        <p>Marca: {brand}</p>
        <p>Cor: {color}</p>
        <p>Km: {km}</p>
        {newCar && <p>Este carro é zero!</p>}
    </div>
  )
}

export default LoopCar