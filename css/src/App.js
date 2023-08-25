import logo from './logo.svg';
import './App.css';
import Mycomponent from './components/Mycomponent';
import Title from './components/Title';

function App() {
  const n = 15
  const titleColor = true
  return (
    <div className="App">
      {/*CSS global*/}
      <h1>
        CSS global
      </h1>
      {/*CSS component*/}
      <Mycomponent />
      <p>Paragrafo do componente App</p>
      {/* CSS inline */}
      <p 
      style={{ 
        color: "#f57859",
        padding: "25px",
        borderTop: "3px solid #f57859"
        }}>
        Este elemento foi estilizado vis CSS inline
        </p>
      {/* CSS inline Dinamico*/}
        <h2 
        style={n < 10 ? ({color: "#f57859"}) : ({color: "#f02b2b"})}
        >
          CSS inline Dinamico
          </h2>
      {/* Classe Dinamica*/}
      <h2 className={titleColor ? "red-Title" : "blue-Title"}>
        Texto com classe Dinamica
      </h2>
      {/* Classe Modules*/}
    <Title />
    </div>
  );
}

export default App;
