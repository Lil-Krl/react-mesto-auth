import React from "react"
import success from "../images/btnsAndicons/success.svg"
import error from "../images/btnsAndicons/fail.svg"
import { useLocation, useHistory } from "react-router-dom"

function InfoTooltip(props) {
  const location = useLocation()
  const history = useHistory()
  function redirectPopup() {
    if (props.status) {
      props.onClose()
      if (location.pathname === "/sign-up") {
        history.push("/sign-in")
      }
    }
    props.onClose()
  }

  return (
    <div
      className={`popup ${props.isOpen ? "popup__active" : ""}`}
      id={props.id}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__escape-button"
          onClick={redirectPopup}
          aria-label="Закрыть форму"
        />
        <div className="authorization__info">
          {props.status ? (
            <>
              <img
                src={success}
                className="authorization__status-icon"
                alt="Иконка успеха"
              />
              <p className="authorization__status-text">
                Вы успешно зарегистрировались!
              </p>
            </>
          ) : (
            <>
              <img
                src={error}
                className="authorization__status-icon"
                alt="Иконка ошибки"
              />
              <p className="authorization__status-text">
                Что-то пошло не так! Попробуйте ещё раз.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoTooltip