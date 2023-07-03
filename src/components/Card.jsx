const Card = (props) => {
  const card = props.card;

  function handleClick() {
    props.onCardClick(card);
  }
  
  return (
    <article className="element">
      <img name="name" onClick={handleClick} className="element__image" src={card.link} alt={card.name}/>
        <button className="element__delete"></button>
        <div className="element__wrap">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__wrap-likes">
            <button type="button" className="element__like"></button>
            <span className="element__likes-number">{card.likes.length}</span>
          </div>
        </div>
    </article>
  )
}

export default Card;