
import './App.css';
import Cars from "./components/Cars";

function App() {
  const cars = [
    {id:1,Brand: "BMW",Year: 2020,Color: "Red"},
    {id:2,Brand: "Mercedes",Year: 2021,Color: "Blue"},
    {id:3,Brand: "Audi",Year: 2023,Color: "Gray"}
  ]
  return (
    <div className="App">
      <h1 className="Header">
        Cars Title
      </h1>
      <h2 className="Cars">Car:</h2>
      {cars.map(car => (
        <Cars
          Brand={car.Brand}
          Year={car.Year}
          Color={car.Color}
        />
      ))}
    </div>
  );
}

export default App;
