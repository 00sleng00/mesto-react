import React from "react";


function PopupWithForm({ name, isOpen, onClose, title, children, saveButton, onSubmit, isLoading, loadingTextBtn }) {


   return (
      <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}
           onClick={e => (e.currentTarget === e.target) && onClose()} >

         <div className="popup__container">
            <button className="popup__close" type="button" onClick={onClose} ></button>
            <h2 className= "popup__heading" > {title} </h2>
            <form onSubmit={onSubmit} className= "popup__form" name={name} >
               {children}
               <button className= "popup__input-save" type="submit" > { isLoading ? loadingTextBtn : saveButton } </button>
            </form>
         </div>
      </div>
   );
}

export default PopupWithForm;


