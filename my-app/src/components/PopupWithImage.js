import React from "react";

function PopupWithImage(props) {
   return (
       <div
           className={`popup popup_type_photo ${
               props.card.name && "popup_opened"
           }`}
       >
          <div className="popup__photo-figure">
             <button
                 className="popup__close"
                 type="button"
                 onClick={props.onClose}
             ></button>
             <img
                 className="popup__photo-img"
                 src={props.card.link}
                 alt={props.card.name}
             />
             <figcaption className="popup__photo-caption">{props.card.name}</figcaption>
          </div>
       </div>
   );
}

export default PopupWithImage;


