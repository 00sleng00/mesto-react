import React from 'react';
import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup({isOpen, onClose, card, onCardDelete, isLoading}) {

    function handleSubmit(e) {
        e.preventDefault();
        onCardDelete(card);
    }

    return (
        <PopupWithForm
            name="confirm"
            title='Вы уверены?'
            saveButton='Да'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            loadingTextBtn='Удаление...'
            isLoading={isLoading}
        />
    )
}

export default ConfirmDeletePopup;