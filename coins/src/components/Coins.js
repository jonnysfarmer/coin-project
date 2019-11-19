import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CoinTable from './CoinTable'

const Coins = () => {

  const [coins20, setCoins20] = useState([])

  const hook = () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C%2024hr%2C%207d')
    .then(response => {
      setCoins20(response.data)
    })
    .catch(err => console.log(err))
  }
  useEffect(hook, [])

  if (coins20 === []){
    console.log('loading')
    return <div>Loading</div>
  }
  console.log(coins20)
  return (
    <section className="section" id="coin-body">
      <div className="container">
      <CoinTable data={coins20}/>

      </div>
    </section>

  )

}
export default Coins