import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Text from "../components/UIElements/Text";
import CardContainer from "../components/UIElements/CardContainer";
import Audio from "../components/UIElements/Audio";
import Spinner from "../components/UIElements/Spinner";

const ConfPage = () => {
  const [conference, setConference] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const confId = useParams().confId;

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/conferences/${confId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const responseData = await response.json();
      setConference(responseData.conference);
      if (!conference) {
        console.log('ERROR')
      }
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  }, [confId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let conferenceDetails = <Spinner />;
  if (!isLoading) {
    conferenceDetails = (
      <React.Fragment>
        <div className="section">
          <Text element="h1">{conference.title}</Text>
          <img
            className="brochure"
            src={conference.brochure}
            alt={`${conference.date.year} Brochure`}
            width="100%"
          />
        </div>
        <section className="section">
          <CardContainer>
            <Text element="h3">Details</Text>
            <Text element="a" href={conference.location.map}>
              {conference.location.place}
            </Text>
            <Text>{`${new Date(conference.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}, 9am - 3:30pm`}</Text>
            <Text>{conference.description}</Text>
          </CardContainer>
        </section>
        <section className="section">
          <CardContainer>
            <Text element="h3">{`Speaker: ${conference.speaker.name}`}</Text>
            <div className="speaker">
              {conference.speaker.image && (
                <img
                  className="speaker__image"
                  src={conference.speaker.image}
                  alt={conference.speaker.name}
                />
              )}
              <div className="speaker__bio">
                <Text>{conference.speaker.bio}</Text>
              </div>
            </div>
          </CardContainer>
        </section>
        <section className="section">
          <CardContainer>
            <Text element="h2">Talks</Text>
            {conference.talks.map((talk, index) => {
              return (
                <Audio
                  key={index}
                  title={talk.title}
                  src={talk.source}
                  type={talk.type}
                />
              );
            })}
          </CardContainer>
        </section>
      </React.Fragment>
    );
  }

  return <MainLayout>{conferenceDetails}</MainLayout>;
};

export default ConfPage;
