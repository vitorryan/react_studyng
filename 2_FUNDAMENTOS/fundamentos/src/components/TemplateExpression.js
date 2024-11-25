const TemplateExpression = () => {
    let name = "Vitor"
    let data = {
        age: "23",
        job: "desenvolvimento"
    }

    return(
        <h2>Olá, meu nome é {name.toUpperCase()} e tenho {data.age} anos! <br /> Atualmente eu estudo/trabalho com {data.job} web</h2>
    )
}
export default TemplateExpression;