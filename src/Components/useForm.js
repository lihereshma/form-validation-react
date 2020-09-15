import { useState, useEffect } from 'react'

export default function useForm(submit, validate) {
  const [values, setValues] = useState({ username: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting) {
      submit()
    }
  })

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
}
