import React, { useState } from "react"
import { Link } from "react-router-dom"

function Register(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleEmail(event) {
    setEmail(event.target.value)
  }
  function handlePass(event) {
    setPassword(event.target.value)
  }

  function handleSubmitButton(event) {
    event.preventDefault()
    props.handleRegister(password, email)
    setPassword("")
    setEmail("")
  }

  return (
    <>
      <div className="authorization">
        <h3 className="authorization__title-form">Регистрация</h3>
        <form className="authorization__form" onSubmit={handleSubmitButton}>
          <label htmlFor="email-input" className="authorization__label">
            <input
              id="email-input"
              type="email"
              onChange={handleEmail}
              value={email || ""}
              className="authorization__input"
              name="email"
              required
              placeholder="Email"
              minLength="8"
              maxLength="40"
            />
            <span className="email-input-error authorization__input-error" />
          </label>
          <label htmlFor="passwd-input" className="authorization__label">
            <input
              id="passwd-input"
              type="password"
              onChange={handlePass}
              value={password || ""}
              className="authorization__input"
              name="passwd"
              required
              placeholder="Пароль"
              minLength="6"
              maxLength="18"
            />
            <span className="passwd-input-error authorization__input-error" />
          </label>
          <button
            type="submit"
            className="authorization__button"
            aria-label="Зарегистрироваться"
          >
            Зарегистрироваться
          </button>
        </form>
        <div className="authorization__register">
          <p>Уже зарегистрированы?</p>
          <Link to="sign-in" className="authorization__link">
            Войти
          </Link>
        </div>
      </div>
    </>
  )
}

export default Register