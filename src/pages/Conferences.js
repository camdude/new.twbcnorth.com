import React, { useState, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";
import Text from "../components/UIElements/Text";
import ConferenceCard from "../components/ConferenceCard";
import Spinner from "../components/UIElements/Spinner";

const Conferences = () => {
  const [conferences, setConferences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/conferences", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const responseData = await response.json();
      setConferences(responseData.conferences);
      console.log("[conference]", responseData);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  let conferenceList = <Spinner />;
  if (!isLoading) {
    conferenceList = conferences.map(conf => {
      return (
        <ConferenceCard
          key={conf.id}
          title={conf.title}
          date={`${conf.date.month} ${conf.date.day}, ${conf.date.year}`}
          img={conf.brochure}
          alt={`${conf.date.year} Brochure`}
          link={`/conferences/${conf.id}`}
        />
      );
    });
  }

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
        <section className="section section-conferences">
          {conferenceList}
        </section>
      </section>
    </MainLayout>
  );
};

export default Conferences;
