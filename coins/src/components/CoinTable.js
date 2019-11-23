import React from 'react'
import { useHistory } from "react-router-dom"
import Loader from './Loader'
// https://github.com/LucasBassetti/react-css-loaders'




const CoinTable = ({ data }) => {
  let history = useHistory();

  const handleClick = (element) => {
    history.push(`coins/${element.id}`)
  }
  if (!data) {


    return <Loader />
  } else {

  return (
    <table className="table table is-hoverable table is-fullwidth">
      <thead>
        <tr>
          <th>Icon</th>
          <th className="is-hidden-mobile">Name</th>
          <th>Ticker</th>
          <th className="is-hidden-mobile">Mrk Cap</th>
          <th className="is-hidden-mobile">24 High</th>
          <th className="is-hidden-mobile">24 Low</th>
          <th>24 Change</th>
          <th>Current Price</th>
        </tr>
      </thead>
      <tbody>
      {data.map((element, i) => {
      return (
        <tr key={i} onClick={() =>handleClick(element)}>
          <td><img src={element.image} alt="Icon" width="25px" height="25px"></img></td>
          <td className="is-hidden-mobile">{element.name}</td>
          <td>{element.symbol}</td>
          <td className="is-hidden-mobile">{element.market_cap}</td>
          <td className="is-hidden-mobile">{element.high_24h}</td>
          <td className="is-hidden-mobile">{element.low_24h}</td>
          <td>{element.price_change_percentage_24h}</td>
          <td>{element.current_price}</td>
        </tr>
      )
      
    })}
      </tbody>
    </table>
   
  )
  }
}

export default CoinTable