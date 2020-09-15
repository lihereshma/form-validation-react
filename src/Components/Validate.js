export default function Validate(values) {

  let errors = {}
  const email_regex = /^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/
  const password_regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

  if(!values.username) {
    errors.username = "Username is required"
  } else if(values.username.length < 5) {
    errors.username = "Username needs to be more than 5 characters"
  }

  if(!values.email) {
    errors.email = "Email address is required"
  } else if(!email_regex.test(values.email)) {
    errors.email = "Email address is invalid"
  }

  if(!values.password) {
    errors.password = "Password is required"
  } else if(!password_regex.test(values.password)) {
    errors.password = "Password is invalid"
  }
  
  return errors;
}
