import React, { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import Text from "../components/UIElements/Text";
import ConferenceCard from "../components/ConferenceCard";

const Conferences = () => {
  const [conferences] = useState([
    {
      title: "Staying Strong in the Lord",
      date: {
        day: "29",
        month: "June",
        year: "2019"
      },
      image: "https://twbcnorth.com/resources/images/twbc19.png"
    },
    {
      title: "Bloom: Bible Talks From Psalm 1",
      date: {
        day: "16",
        month: "June",
        year: "2018"
      },
      image: "https://twbcnorth.com/resources/images/twbc18.png"
    }
  ]);

  return (
    <MainLayout>
      <section className="section">
        <Text element="h1">Conferences</Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quaerat
          aliquid porro perferendis expedita. Saepe fuga nesciunt asperiores
          recusandae nobis alias porro sequi repellat, voluptatibus sunt nostrum
          fugit accusantium pariatur.
        </Text>
      </section>
      <section className="section section-conferences">
        {conferences.map(conf => {
          return (
            <ConferenceCard
              key={conf.date.year}
              title={conf.title}
              date={`${conf.date.month} ${conf.date.day}, ${conf.date.year}`}
              img={conf.image}
              alt={`${conf.date.year} Brochure`}
              link={`/conferences/${conf.date.year}`}
            />
          );
        })}
      </section>
    </MainLayout>
  );
};

export default Conferences;
