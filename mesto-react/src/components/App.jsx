import React from "react";
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(selectedCard){
    setSelectedCard(selectedCard);
  }

  function closeAllPopups(){
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <body className="page">
    <Header />
    <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
    />
    <Footer />
    <PopupWithForm
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      title = {'Редактировать профиль'}
      name = {'edit'}
      buttonText = {'Сохранить'}
    >
      <input id="name" name="username" className="popup__input popup__input_type_name" type="text" placeholder="Имя" value="" required minlength="2" maxlength="40"/>
      <span className="name-error popup__input-error"></span>
      <input id="job" name="job" className="popup__input popup__input_type_job" type="text" placeholder="О себе" value="" required minlength="2" maxlength="200"/>
      <span className="job-error popup__input-error"></span>
    </PopupWithForm>
    <PopupWithForm
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      title = {'Редактировать профиль'}
      name = {'add'}
      buttonText = {'Создать'}
    >
      <input id="input-name" name="name" className="popup__input popup__input_type_title" type="text" placeholder="Название" value="" required minlength="2" maxlength="30" />
      <span className="input-name-error popup__input-error"></span>
      <input id="input-link" name="link" className="popup__input popup__input_type_link" type="url" placeholder="Ссылка на картинку" value="" required />
      <span className="input-link-error popup__input-error"></span>
    </PopupWithForm>
    <PopupWithForm
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      title = {'Обновить аватар'}
      name = {'avatar'}
      buttonText = {'Сохранить'}
    >
      <input id="avatar" name="avatar" className="popup__input popup__input_type_link" type="url" placeholder="Ссылка на картинку" value="" required />
      <span className="avatar-error popup__input-error"></span>
    </PopupWithForm>
    <ImagePopup
      card={selectedCard}
      onClose={closeAllPopups}
     />
  </body>
  );
}

export default App;
