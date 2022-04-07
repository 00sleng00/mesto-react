import React from "react";

function PopupWithForm(props) {
   const name = props.name;
   const title = props.title;
   const buttonText = props.buttonText;
   const children = props.children;
   return (
      <div className={`popup ${props.isOpen && "popup_opened"}`}>
         <div className="popup__container">
            <button
               className="popup__close"
               type="button"
               onClick={props.onClose}
            ></button>
            <h2 className={`popup__heading popup__heading_${name}`}>{title}</h2>
            <form
               className={`popup__input-container popup__input-container_${name}`}
               name={name}
               action="#"
               method="post"
            >
               {children}
               <button
                  className={`popup__input-save popup__input-save_${name}`}
                  type="submit"
               >
                  {" "}
                  {buttonText}{" "}
               </button>
            </form>
         </div>
      </div>
   );
}

export default PopupWithForm;


