import React from "react";

function Card(props) {
   function handleClick() {
      props.onCardClick(props.card);
   }

   return (
      <li className="card__list-item">
         <img className="card__image" alt={props.card.name}
            src={props.card.link} onClick={handleClick} />
         <div className="card__block">
            <h2 className="card__text">{props.card.name}</h2>
            <button type="button" className="card__delete"></button>
            <div className="card__element-container">
               <button type="button" className="card__like"></button>
               <span className="card__like-count">{props.card.likes.length}</span>
            </div>
         </div>
      </li>
   );
}

export default Card;