import { useState } from 'react'


const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUsers] = useState([
        {id:1, name:"vitor", age:23},
        {id:2, name:"richard", age:19},
        {id:3, name:"Carol", age:25}
    ]);

    const [number, setNum] = useState(0)

    const deleteRandom = () => {
        const numberRandom = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => numberRandom !== user.id)
        })
    }

    const aumentar = () => {
        setNum(prevNum => prevNum + 1)
    }

    const clear = () => {
        setNum(prevNum => 0)
    }

    const diminuir = () => {
        setNum(prevNum => prevNum -1)
    }

    return (
        <div>
            <h3>Previous state</h3>
            <p>Contador: {number}</p>
            <button onClick={aumentar}>Add +1</button>
            <button onClick={clear}>limpar</button>
            <button onClick={diminuir}>Tirar -1</button>

            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Deletar user aleatorio</button>
        </div>
    )
}

export default ListRender