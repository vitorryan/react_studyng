const CarDetails = ({brand, km, color, modelo, newCar}) => {
    return(
        <div>
            <h3>Desestruturando a props</h3>
            <h6>Detalhes do carro</h6>
            <ul>
                <li>Marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor {color}</li>
                <li>Modelo: {modelo}</li>
                {newCar && <p>Este carro é novo!</p>}
            </ul>
        </div>
    );
};

export default CarDetails;