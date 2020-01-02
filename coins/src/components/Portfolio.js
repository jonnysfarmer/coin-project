import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import Button from '@material-ui/core/Button'


const Portfolio = (props) => {

  const [portfolio, setPortfolio] = useState([])
  const [errors, setErrors] = useState([])

  const portfolioHook = () => {
    const userID = props.match.params.userID
    axios.get(`http://localhost:8000/api/portfolio/${userID}`)
      .then(response => setPortfolio(response.data)) //this will only return list with a status of active
      .catch(err => setErrors(err))
  }

  useEffect(portfolioHook, [])
  console.log(portfolio)

  return (
    <section className="hero is-fullheight background-white">
      <section className="section">
        <div className="container">
        <div className="register-title">Portfolio</div>
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className='button link'
            label="Portfolio"
          >
            Create a Portfolio
          </Button>



        </div>
      </section>
    </section>
  )
  


}

export default Portfolio