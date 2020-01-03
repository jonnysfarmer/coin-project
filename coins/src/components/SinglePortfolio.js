
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SinglePortfolio = (props) => {

  const [portfolioInfo, setPortfolioInfo] = useState({})
  const [errors, setErrors] = useState([])

  const portfolioHook = () => {
    const portID = props.match.params.portID
    axios.get(`http://localhost:8000/api/portfolio/single/${portID}`)
      .then(response => setPortfolioInfo(response.data)) //this will only return list with a status of active
      .catch(err => setErrors(err))
  }

  useEffect(portfolioHook, [])

  if (portfolioInfo === {}) return <div>Loading</div>
  return (
    <section className="hero is-fullheight background-white">
      <section className="section">
        <div className="container">
          <div className="register-title">{portfolioInfo.portfolioname}</div>
          <div>
            <FormControl
              className='coindropdown'
            // fullwidth
            >
              <InputLabel id="demo-simple-select-label">Select your coin</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              // value={age}
              // onChange={handleChange}
              >
                <MenuItem value='bitcoin'>Bitcoin</MenuItem>
                <MenuItem value='ethereum'>Ethereum</MenuItem>
                <MenuItem value='ripple'>Ripple</MenuItem>
              </Select>
              <TextField
                variant="outlined"
                margin="normal"
                // className="background-white"
                required
                fullWidth
                // id="email"
                label="Holding amount"
                name="number"
                autoComplete="Holding amount"
                autoFocus
                color="white"
                // onChange={(e) => handleChangePortfolio(e)}
                type="text"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className='button link'
                label="create"
                // onClick={(e) => handleSubmitPortfolio(e)}
              >
                Add Coin
                  </Button>
            </FormControl>

          </div>

        </div>
      </section>
    </section>
  )

}



export default SinglePortfolio