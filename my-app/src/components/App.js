import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";

function App(props) {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setSelectedCard({});
    }

    return (
        <>
            <div className="page">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onEditAvatar={handleEditAvatarClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                />
                <Footer />
            </div>
            
            <PopupWithForm
                title={"Редактировать профиль"}
                onClose={closeAllPopups}
                isOpen={isEditProfilePopupOpen}
                name={"profile"}
                buttonText={"Сохранить"}
            >
                <input
                    type="text"
                    placeholder="Имя"
                    className="popup__field popup__field_input_name"
                    id="name-input"
                    name="name"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span className="name-input-error popup__input-error"></span>
                <input
                    type="text"
                    placeholder="О себе"
                    className="popup__field popup__field_input_job"
                    id="job-input"
                    name="job"
                    minLength="2"
                    maxLength="200"
                    required
                />
                <span className="job-input-error popup__input-error"></span>
            </PopupWithForm>

            <PopupWithForm
                title={"Новое место"}
                onClose={closeAllPopups}
                isOpen={isAddPlacePopupOpen}
                name={"card"}
                buttonText={"Создать"}
            >
                <input
                    type="text"
                    placeholder="Название"
                    className="popup__field popup__field_card_name"
                    id="card-name-input"
                    name="name"
                    minLength="2"
                    maxLength="30"
                    required
                />
                <span className="card-name-input-error popup__input-error"></span>
                <input
                    type="url"
                    placeholder="Ссылка на картинку"
                    className="popup__field popup__field_card_link"
                    id="card-url-input"
                    name="link"
                    required
                />
                <span className="card-url-input-error popup__input-error"></span>
            </PopupWithForm>

            <PopupWithForm title={"Вы уверены?"} name={"delete"} buttonText={"Да"} />

            <PopupWithForm
                title={"Обновить аватар"}
                onClose={closeAllPopups}
                isOpen={isEditAvatarPopupOpen}
                name={"avatar"}
                buttonText={"Сохранить"}
            >
                <input
                    type="url"
                    placeholder="Ссылка на картинку"
                    className="popup__field popup__field_avatar_link"
                    id="avatar-input"
                    name="avatar"
                    required
                />
                <span className="avatar-input-error popup__input-error"></span>
            </PopupWithForm>

            <PopupWithImage card={selectedCard} onClose={closeAllPopups} />
        </>
    );
}
export default App;