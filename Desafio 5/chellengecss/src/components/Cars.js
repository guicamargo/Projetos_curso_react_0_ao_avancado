import './Cars.css'

const Cars = ({Brand, Year, Color}) => {
  return (
    <div >
        
        <ul>
        <li className="CarsDetails">Marca: {Brand}</li>
        <li className="CarsDetails">Ano: {Year}</li>
        <li className="CarsDetails">Cor: {Color}</li>

        </ul>
    </div>
  )
}

export default Cars