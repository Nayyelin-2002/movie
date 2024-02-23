import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";

function Search() {
  const { title } = useParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const searchedMovie = async () => {
    const searched = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=7e4d7f62afc58842e85bcac8037872fb&language=en-US&query=${title}&page=1&include_adult=false`
    );
    const searchedData = await searched.json();
    setFoundMovies(searchedData.results);
  };
  useEffect(() => {
    searchedMovie();
  }, [title]);
  return (
    <div>
      <section className="px-5 my-20">
        <h1 className="text-3xl font-bold text-white">Title -{title}</h1>
        <div className="grid grid-cols-10 gap-3 mt-4">
          {foundMovies.length &&
            foundMovies.map((foundmovie) => {
              return <Cards key={foundmovie.id} popmov={foundmovie} />;
            })}
        </div>
      </section>
    </div>
  );
}

export default Search;
