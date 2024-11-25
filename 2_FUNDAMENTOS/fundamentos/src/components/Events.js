const Events = () => {

    const handleMyClick= (e) =>{
        console.log('dados do evento', e)
        console.log('ativou')
    }

    const renderSomething = (x) => {
        if(x) {
            return <h3>Renderizou um JSX fora do return</h3>
        } else {
            return <h3>Renderizou X falso</h3>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyClick}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('Função em linha ativada')}>Ativar função em linha</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true) {
                        console.log('Função em bloco ativada #medo')
                    }
                }}>Ativar função em bloco</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;