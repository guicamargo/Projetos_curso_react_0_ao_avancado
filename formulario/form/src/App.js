import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div>
      <h1>Formulário</h1>
      <MyForm />
      <h2>controlled input</h2>
      <MyForm user={{
         name: 'Guilherme'
         , email: 'Guilherme@gmail.com'
         , bio: 'descrição de teste do usuário' 
         , role: 'admin'
         }}/>

    </div>
  );
}

export default App;
