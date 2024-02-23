import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Headercard from "./Headercard";
function Header() {
  const [relatedMovies, setRelatedMovies] = useState([]);
  useEffect(() => {
    fetchRaltedMovies();
  }, []);
  const fetchRaltedMovies = async () => {
    const moviedata = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=7e4d7f62afc58842e85bcac8037872fb&language=en-US"
    );
    const data = await moviedata.json();
    setRelatedMovies(data.results);
    //     console.log(data.results);
  };
  return (
    <section>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 3000,
        }}
      >
        {relatedMovies.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <Headercard movie={movie} />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}

export default Header;
