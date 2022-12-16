import React from "react";
import { useState } from "react";


const Form = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    message:"",
  })

  const [validation, setValidation] = useState(false)


  const validateName = () => {

    let nameUser = values.name.split(" ")

    if (nameUser.length < 2) return alert("Please enter your fullname")
    if (nameUser[0].length < 3 || nameUser[1].length < 3) return alert("It is noot a valid name")

    return true

  }

  const validateEmail = () => {

    let emailUser = values.email.split("@")
    if (emailUser.length < 2) return alert("The email may content '@' and a domain name for example '.com'")

    let dotCom = emailUser[1].split(".")
    if (dotCom.length < 2) return alert("The email may content '@' and a domain name for example '.com'")

    return true

  }

  const handleChange = (e) => {

    const { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]:value,
    }

    setValues(newValues)

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    let nameValidation = validateName()

    let emailValidation = validateEmail()

    if (nameValidation && emailValidation) {
      setValidation(true)
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Fullname</label>
        <input type="text" name="name" className="input-form" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" className="input-form" onChange={handleChange} />
        <label htmlFor="message">Your message</label>
        <input type="text" name="message" className="input-form" onChange={handleChange} />
        <button type="submit" className="btn-form">SUBMIT</button>
      </form>
      {validation ? <h3>Gracias por comunicarse con nosotros {values.name}, un asistente se contactará lo antes posible!</h3> : ""}
    </>
  );
};

export default Form;
