import React from "react";

import MainLayout from "../layouts/MainLayout";
import Text from "../components/UIElements/Text";

const About = () => {
  return (
    <MainLayout>
      <section className="section">
        <Text element="h1">About</Text>
        <Text>
          The Tasmanian Women's Bible Conference is a day conference for women
          whose desire is to have their minds, hearts and lives shaped by the
          Bible.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          hendrerit blandit lacus et porttitor. Praesent ac elit fringilla,
          euismod nunc eu, gravida arcu. Morbi vitae mattis nisl. Suspendisse
          finibus, dolor in feugiat consectetur, dolor nunc gravida ex, vitae
          lacinia tellus diam ut tortor. Nam semper augue nulla, vitae aliquam
          dui tempor iaculis. Curabitur sed erat sit amet nibh scelerisque
          cursus id vitae risus. Aenean eleifend cursus malesuada. Nulla
          fringilla massa et ligula tristique, id vestibulum nisi finibus.
          Aenean ac urna dolor. Donec et urna nec felis lobortis hendrerit.
          Maecenas condimentum, ex ac feugiat ornare, nisi nunc sollicitudin
          enim, eu interdum ante neque non sapien. Interdum et malesuada fames
          ac ante ipsum primis in faucibus.
        </Text>
        <Text>
          Fusce consectetur porta odio, id commodo metus rhoncus sed. Sed a
          purus nec tortor volutpat hendrerit. Maecenas a sollicitudin lectus.
          Vestibulum in ligula tortor. Pellentesque luctus ante id diam
          porttitor, non fringilla ex tempus. Donec lacinia rhoncus nisi nec
          fringilla. In auctor, ligula nec sodales posuere, odio nulla auctor
          nulla, in posuere arcu lorem ac metus. Etiam bibendum urna sed lectus
          lacinia, eu placerat velit iaculis. Morbi dui felis, convallis eget
          porta eu, imperdiet commodo ex. Suspendisse porttitor sit amet sapien
          eget fermentum. Pellentesque laoreet erat eu lacus efficitur, molestie
          vulputate augue interdum. Fusce ac mollis risus. Vestibulum laoreet
          non ligula in vehicula. Proin accumsan massa et vehicula varius.
        </Text>
      </section>
    </MainLayout>
  );
};

export default About;
