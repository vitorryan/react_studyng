import styles from "./Cars.module.css";

const Cars = ({modelo, ano, }) => {
  return (
    <div>
        <h4 className={styles['carros']}>Detalhes do carro:</h4>
        <p className={styles['descibre']}>Modelo: {modelo}</p>
        <p className={styles['descibre']}>Ano: {ano}</p>
    </div>
  )
}

export default Cars