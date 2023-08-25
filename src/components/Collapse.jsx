import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  //declaration du state en utilisant le Hook useState()
  const [isOpen, setIsOpen] = useState(false); // je definie le state du toggle (et false par défaut)

  //fonction pour gérer l'afichage du contenu des collapses
  const handleIconClicked = () => {
    setIsOpen(!isOpen);
  };

  //la props content peut être un string dans certains cas ou une balise html dans d'autres cas.
  // dans notre projet, dans l'équipement, content sera ul/li et ne peut etre contenu dans un <p>
  
  const formattedContent = typeof content === 'string' ? <p>{content}</p> : content;

  return (
    // affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <p onClick={handleIconClicked}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>
      {/* Si le collapse est à TRUE alors il affichera la description */}
      <div className="collapse__dropdown__content">
        {isOpen ? formattedContent : null}
      </div>
    </div>
  );
};

export default Collapse;
