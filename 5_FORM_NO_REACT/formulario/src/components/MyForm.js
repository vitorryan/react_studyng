import './MyForm.css'

import {useState} from 'react'

const MyForm = ({user}) => {
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState(user ? user.bio : '')

    const [role, setRole] = useState(user ? user.role : '')


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando o formulario")
        console.log(name, email, bio, role)

        //validação do formulario
        //envio com sucesso

        //Deu sucesso, limpa o formulario
        setName("")
        setEmail("")
        setBio("")
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    onChange={handleName} 
                    value={name} />
            </div>

            <label>
                <span>E-mail</span>
                <input  type="email" 
                        name="name" 
                        placeholder="Digite o seu email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
            </label>

            <label>
                <span>Bio:</span>
                <textarea 
                    name="bio" 
                    placeholder="Descrição do usuario" 
                    onChange={(e) => setBio(e.target.value)} 
                    value={bio}></textarea>
            </label>

            <label>
                <span>Função do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm