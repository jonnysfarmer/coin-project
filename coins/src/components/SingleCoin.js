import React from 'react'
import axios from 'axios'

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


  render() {
    if (!this.state.coin) return null

    return(
      <div>{this.state.coin.name}</div>
    )

  }

  

}
export default SingleCoin