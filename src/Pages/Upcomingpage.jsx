import React from "react";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";

function upcomingpage() {
  return (
    <section>
      <Header />
      <CardContainer
        title={"Upcoming Movies"}
        url={`https://api.themoviedb.org/3/movie/upcoming?api_key=7e4d7f62afc58842e85bcac8037872fb&language=en-US
    `}
      />
    </section>
  );
}

export default upcomingpage;
