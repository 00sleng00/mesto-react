import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";


function Main(props) {
   const [userName, setUserName] = React.useState("");
   const [userDescription, setUserDescription] = React.useState("");
   const [userAvatar, setUserAvatar] = React.useState("");
   const [cards, setCards] = React.useState([]);

   React.useEffect(() => {
      Promise.all([api.getProfile(), api.getInitialCards()])
         .then(([userInfo, cardInfo]) => {
            setUserName(userInfo.name);
            setUserDescription(userInfo.about);
            setUserAvatar(userInfo.avatar);
            setCards(cardInfo);
         })
         .catch((err) => console.log(`Ошибка: ${err}`));
   }, []);

   return (
      <main className="content">
         <section className="profile">
            <div className="profile__icon" type="button" aria-label="Сменить_аватар" onClick={props.onEditAvatar}>
               <img src={userAvatar} alt="Аватарка" className="profile__avatar" />
            </div>
            <div className="profile__info">
               <h1 className="profile__info-name">{userName}</h1>
               <p className="profile__info-job">{userDescription}</p>
               <button onClick={props.onEditProfile} type="button"  className="profile__info-edit-button"></button>
            </div>
            <button onClick={props.onAddPlace} type="button" className="profile__info-add-button"></button>
         </section>

         <section className="card">
            <ul className="card__list">
               {cards.map((card) => (
                  <Card key={card._id} card={card} onCardClick={props.onCardClick} />
               ))}
            </ul>
         </section>
      </main>
   );

}

export default Main;