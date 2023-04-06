import React from "react"

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_zoom_active ${
        props.isOpen ? "popup__active" : ""
      }`}
      id={props.id}
    >
      <div className="popup__zoom-image">
        <button
          type="button"
          className="popup__escape-button"
          onClick={props.onClose}
          aria-label="Закрыть"
        />
        <img
          src={props.card.link}
          className="popup__zoom-image"
          alt={props.card.name}
        />
        <p className="popup__title">{props.card.name}</p>
      </div>
    </div>
  )
}

export default ImagePopup