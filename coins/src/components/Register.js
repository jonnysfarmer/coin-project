import React, { useState, useEffect } from 'react'
import axios from 'axios'

const registerform = {
  firstname: '',
  surname:'',
  email: '',
  password: '',
  passwordConfirmation: ''

}

const Register = ( props ) => {

  const [registerInfo, setRegisterInfo] = useState(registerform)
  const [errors, setErrors] = useState([])

  


  const handleChange = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value })
    setErrors([])
    console.log(registerInfo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/register', registerInfo)
      .then(() => props.history.push('/coins'))
      .catch((err) => {
        // if (err.response.data.error.includes('email')) return setErrors({ message: 'Your email is already in use' })
        // if (err.response.data.error.includes('password')) return setErrors({ message: 'Passwords do not match' })
        setErrors ({ errors: err.response.data })
      })
  }
  //this deals with the main 2 erros of duplicate email / incorrect email confirmation
  //need to add a regex function to check if email is valid input!
  //need to check if blank fields are before 

  
  console.log(errors)
  return (
    
    <section className="section is-fullheight" id="coin-body">
   <div className="container">
        <div className="coin-title">Register</div>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="field">
            <label htmlFor="" className="label">
              Email
            </label>
            <div className="control">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="email"
                className="input"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Firstname
            </label>
            <div className="control">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="firstname"
                className="input"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Surname
            </label>
            <div className="control">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="surname"
                className="input"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Password
            </label>
            <div className="control">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="password"
                className="input"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Confirm password
            </label>
            <div className="control">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="passwordConfirmation"
                className="input"
              />
            </div>
            {errors.message && <small className="help is-danger">
              {errors.message}
            </small>}
          </div>
          <button className="button link">
            Register
          </button>
        </form>
      </div>
    </section>

  )

}
export default Register