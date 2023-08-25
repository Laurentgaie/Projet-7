import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import imgBannerAbout from "../assets/images/banner/aboutBanner.png";
import Collapse from "../components/Collapse";
import CollapseData from "../datas/collapses.json";

const About = () => {
  return (
    <Layout pageClassName="about">
      <Banner image={imgBannerAbout} titre="" />

      <div className="collapse">
        <div className="collapse__dropdown">
          {CollapseData.map((item) => {
            return (
              <div key={item.id}>
                <Collapse content={item.content} title={item.title} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default About;
