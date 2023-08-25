import React from "react";
import { useParams, Navigate } from "react-router-dom";
import DataFichLogement from "../datas/logement.json";
import Layout from "../components/layout/Layout";
import Carrousel from "../components/ficheLogement/Carrousel";
import Host from "../components/ficheLogement/Host";
import Rate from "../components/ficheLogement/Rate";
import Tag from "../components/ficheLogement/Tag";
import Collapse from "../components/Collapse";

const FichLogment = () => {
// Récupère l'id depuis l'url (voire routine dans app.jsx) en utilisant le hook useparams
  const { id } = useParams();
// on récupère la fiche logement correspondante à l'id demandé dans l'url
  const ficheLogement = DataFichLogement.find((logement) => logement.id === id);

  if (!ficheLogement) {
    return (
      <Navigate replace to="/404" />
    )
  }

  /* Tags */
  const tagsLogement = ficheLogement.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  /* Équipements */
  const equipements = (
    <ul>
      {ficheLogement.equipments.map((equipment, i) => {
        return (
          <li key={i}>{equipment}</li>
        );
      })}
    </ul>
  );

  return (
    <Layout pageClassName="logement">
      <div className="Fiche-container">
        <Carrousel slides={ficheLogement.pictures} />
        <section className="Fiche-logement">
          <div className="description-info">
            <div className="description-info__titletags">
              <div className="description-info__titletags__title">
                <span className="titre-logement">{ficheLogement.title}</span>
                <span className="endroit-logement">
                  {ficheLogement.location}
                </span>
              </div>
              {/* Tags */}
              <div className="description-info__titletags__tags">
                {tagsLogement}
              </div>
            </div>

            <div className="description-info__proprietaire">
              {/* Hosting */}
              <div className="description-info__proprietaire__nom-prop">
                <Host
                  name={ficheLogement.host.name}
                  picture={ficheLogement.host.picture}
                />
              </div>
              {/* Rating */}
              <div className="description-info__proprietaire__rate">
                <Rate score={ficheLogement.rating} />
              </div>
            </div>
          </div>
        </section>
        {/* Collapse */}
        <div className="description-centent">
          <div className="description-centent__description">
            <Collapse
              title="Description"
              content={ficheLogement.description}
            />
          </div>
          <div className="description-centent__equipement">
            <Collapse title="Équipements" content={equipements} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FichLogment;
