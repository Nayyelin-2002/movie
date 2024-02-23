import { useEffect, useState } from "react";
import Cards from "./Cards";

function CardContainer({ title, url }) {
  const [popularmovies, setPopularmovies] = useState([]);
  useEffect(() => {
    fetchPOPmov();
  }, []);

  const fetchPOPmov = async () => {
    const Popmov = await fetch(url);
    const popdata = await Popmov.json();
    setPopularmovies(popdata.results);
    //     console.log(popdata.results);
  };
  return (
    <section className="px-5 my-10">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <div className="grid grid-cols-10 gap-3 mt-4">
        {popularmovies.length &&
          popularmovies.map((popmov) => {
            return <Cards popmov={popmov} key={popmov.id} />;
          })}
      </div>
    </section>
  );
}

export default CardContainer;
