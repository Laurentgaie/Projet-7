import React from "react";
import Banner from "../components/Banner";
import logements from "../datas/logement.json";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import imgHomeBanner from "../assets/images/banner/homeBanner.png";
import Layout from "../components/layout/Layout";

const Home = () => {
  return (
    <Layout pageClassName="home">
      <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
    
      <div className="home_gallery">
        {logements.map((logement) => {
          return (
            <article key={logement.id}>
              <Link to={`/logement/${logement.id}`}>
                <Card image={logement.cover} title={logement.title} />
              </Link>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
