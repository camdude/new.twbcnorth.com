import React, { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import Text from "../components/UIElements/Text";
import CardContainer from "../components/UIElements/CardContainer";
import Audio from "../components/UIElements/Audio";

const ConfPage = () => {
  const [conference, setConference] = useState({
    title: "Staying Strong in the Lord",
    brochure: "https://twbcnorth.com/resources/images/twbc18.png",
    location: {
      place: "Riverbank Christian Church",
      map: "https://goo.gl/maps/4wKNrtwu2DH2"
    },
    date: {
      day: "29",
      month: "June",
      year: "2019",
      time: {
        start: "9:00am",
        end: "3:30pm"
      }
    },
    description:
      "As the years roll on, the distractions of this world, uncertainties in life and the challenges to our worldview can consume us and cause our faith to drift. Complacency can pull us away. How can we stay strong, and grow even stronger in our love for Jesus? How do we nurture our souls and draw closer to our Lord? The Psalms will guide and inspire us as we seek to live for Jesus each day.",
    speaker: {
      image: "https://twbcnorth.com/resources/images/speaker19.jpg",
      name: "Chris Quirk",
      bio:
        "Chris trained as a primary school teacher and when the suggestion of learning to preach was given, Chris decided to study at SMBC to ground her theology and develop her pastoral skills. Chris has recently retired from teaching Biblical Studies. As well as new opportunities for ministry, she is looking forward to discovering more of Australia with her husband Mick, spending time with grandchildren and dabbling in more learning at Bible College. She enjoys family picnics and is refreshed by a relaxed cup of tea with friends."
    },
    talks: [
      {
        title: "Talk 1: Psalm 63 Growing strong our dependence on the Lord",
        source: "https://twbcnorth.com/resources/audio/twbc19_talk1.mp3",
        type: "mpeg"
      },
      {
        title:
          "Talk 2: Psalm 19 Watering and fertilising our souls with God’s Word",
        source: "https://twbcnorth.com/resources/audio/twbc19_talk2.mp3",
        type: "mpeg"
      },
      {
        title: "Talk 3: Psalm 51 Weeding and pruning away sin",
        source: "https://twbcnorth.com/resources/audio/twbc19_talk3.mp3",
        type: "mpeg"
      }
    ]
  });

  return (
    <MainLayout>
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
          <Text>{`${conference.date.month} ${conference.date.day}, ${conference.date.year}, ${conference.date.time.start}-${conference.date.time.end}`}</Text>
          <Text>{conference.description}</Text>
        </CardContainer>
      </section>
      <section className="section">
        <CardContainer>
          <Text element="h3">{`Speaker: ${conference.speaker.name}`}</Text>
          <div className="speaker">
            <img
              className="speaker__image"
              src={conference.speaker.image}
              alt={conference.speaker.name}
            />
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
              <Audio key={index} title={talk.title} src={talk.source} type={talk.type} />
            );
          })}
        </CardContainer>
      </section>
    </MainLayout>
  );
};

export default ConfPage;
