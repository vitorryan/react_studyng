import styles from "./Title.module.css";

const Title = () => {
  return (
    <div>
        <h1 className={styles['my_title']}>Meu titulo com CSS module</h1>
    </div>
  )
}

export default Title