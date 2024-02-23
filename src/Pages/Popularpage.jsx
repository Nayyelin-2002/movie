import React from "react";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";

function Popularpage() {
  return (
    <section>
      <Header />
      <CardContainer
        url={`https://api.themoviedb.org/3/movie/popular?api_key=7e4d7f62afc58842e85bcac8037872fb&language=en-US
    `}
        title={"Popular Movies"}
      />
    </section>
  );
}

export default Popularpage;
