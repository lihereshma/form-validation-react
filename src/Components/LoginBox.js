import React from 'react'
import useForm from './useForm'
import Validate from './Validate'

export const LoginBox = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, Validate)

  function submit() {
    alert("Login successfully")
  }

  return (
    <div className="inner-container">
      <form className="box" onSubmit={ handleSubmit }>
        <div className="form-group">
          <input 
            type="text" 
            name="username" 
            value={ values.username } 
            className={ `form-control ${ errors.username && "inputError" }` } 
            placeholder="Username"
            onChange={ handleChange } 
          />
          { errors.username && <span className='error'>{ errors.username }</span> }
        </div>
        <div className="form-group">
          <input 
            type="password" 
            name="password" 
            value={ values.password } 
            className={ `form-control ${ errors.password && "inputError" }` }
            placeholder="Password"
            onChange={ handleChange } 
          />
          { errors.password && <span className='error'>{ errors.password }</span> }
        </div>
        <button type="submit" className="btn">Sign In</button>
      </form>
    </div>
  )
}
