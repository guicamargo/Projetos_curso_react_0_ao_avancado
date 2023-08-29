import './MyForm.css';
import {useState} from 'react';
const MyForm = ({user}) => {
  // 6 - controlled input
  // 3 - Gerenciamento de dados do  input
    const [name, setName] = useState(user ? user.name : '');	
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');

    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
      setName(e.target.value);
    }
    //5 - envio de form
    const handlesubmit = (e) => {
      e.preventDefault();
      console.log('Enviando formulário com:');
      console.log(name, email,bio,role);
      //local onde seria feito a validação e o envio

      //7- Limpar form
      setName('');
      setEmail('');
      setBio('');
      setRole('');
    }

  return (
    <div>
      {/* 1 - created form */}
          {/* 5 - envio de form */}
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="name">Name: </label>
            <input 
            type="text" 
            name="name" 
            placeholder="Digite seu nome" 
            value={name}
            onChange={handleName}
            />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          {/* 4 - Simplificação de manipulação de state */}
          <span>E-mail</span>
          <input 
          type="email" 
          name="email" 
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           />
        </label>
        {/* 8- textarea */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" 
          placeholder="Descreva o Usuário"
           onChange={(e) => setEmail(e.target.value)}
           value={bio}
           >
           </textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Nivel de acesso ao sistema</span>
          <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
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