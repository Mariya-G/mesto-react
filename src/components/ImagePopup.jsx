import React from "react";

function ImagePopup (props) {
  return(
    <>
    <section className={`popup popup_image ${props.card.link ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_view">
        <button type="button" className="popup__close-button popup__close-button_view" onClick={props.onClose}></button>
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <p className="popup__name">{props.card.name}</p>
      </div>
    </section>
    </>
  );
}
export default ImagePopup;