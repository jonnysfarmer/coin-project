import React from 'react'
import axios from 'axios'
import Loader from './Loader'
// https://github.com/LucasBassetti/react-css-loaders'
import GraphSingle from './GraphChange'


class SingleCoin extends React.Component {
  // https://api.coingecko.com/api/v3/coins/ethereum?tickers=true

  constructor() {
    super()
    this.state = {
      coin: null,
      error: false
    }
  }



  componentDidMount() {
    const id = (this.props.match.params.id)
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true`)
      .then(response => this.setState({ coin: response.data }))
      .catch(err => this.setState({ error: err.response.status }))

  }
// .name - .symbol - .block_time_in_minutes .links.homepage[0]
// .image.small or .large .genesis_date .market_data.current_price.usd // .eur // .gbp
// .market_cap.usd .high_24h.usd  .low_24h.usd .price_change_24h

  render() {
    if (!this.state.coin) {
      return (
        <Loader color = "#000" background = "background-white"/>
      )
    } else {
      const { coin } = this.state;
      return (
        <section className="section is-fullheight background-white">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className = "has-text-centered">
                  <img src={coin.image.large} alt="Logo" />
                </div>
                <p>Name : {coin.name}</p>
                <p>Symbol : {coin.symbol}</p>
                <p>Homepage : {coin.links.homepage[0]}</p>
                <p>Block Time (min) : {coin.block_time_in_minutes}</p>
                <p>Genesis Date : {coin.genesis_date}</p>
              </div>
              <div className="column">
              {/* <img src={coin.image.thumb} alt="Logo" /> */}
              <p>Current Price in :</p>
              <p>USD : {coin.market_data.current_price.usd}</p>
              <p>EUR : {coin.market_data.current_price.eur}</p>
              <p>GBP : {coin.market_data.current_price.gbp}</p>
              <br></br>
              <p>Percentage Change in 24hr : {coin.market_data.price_change_percentage_24h}</p>
              <p>24hr Price Change : {coin.market_data.price_change_24h}%</p>
              <br />
              <p>24hr High : {coin.market_data.high_24h.usd}</p>
              <p>24hr Low : {coin.market_data.low_24h.usd}</p>
             </div>
              <div className="column">
                <div className="title">Graph showing % price change over Time</div>
                <div>
                  <GraphSingle  data={coin.market_data}/>
                </div>
               </div>
            </div>
          </div>
        </section>


      )
    }
  }



}
export default SingleCoin