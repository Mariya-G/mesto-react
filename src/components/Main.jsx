import React from "react";
import {api} from '../utils/api.js'
import Card from './Card.jsx'

function Main (props) {

  const [userName, setUserName] = React.useState(true);
  const [userDescription, setUserDescription] = React.useState(true);
  const [userAvatar, setUserAvatar] = React.useState(true);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserAvatar(data.avatar);
        setUserDescription(data.about);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch
      ((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }, []);

  return(
    <main className="content">
      <section className="profile">
        <div className="profile__wrap">
          <img className="profile__avatar" src={userAvatar}/>
          <button onClick={props.onEditAvatar} className="profile__avatar-button"></button>
          <div className="profile__info">
            <div className="profile__inner">
              <h1 className="profile__title">{userName}</h1>
              <button onClick={props.onEditProfile} type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
      </section>
      <section className="elements">
        {cards.map(item =>(
          <Card
            onCardClick={props.onCardClick}
            key={item._id}
            card={item}
            />
          )
        )}
      </section>
    </main>
  );
}

export default Main;