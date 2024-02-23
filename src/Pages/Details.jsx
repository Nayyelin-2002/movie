import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/solid";

function Details() {
  const [Detailmovie, SetDetailmovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    MovieDetail();
  }, [id]);
  const MovieDetail = async () => {
    const detail = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7e4d7f62afc58842e85bcac8037872fb&language=en-US`
    );

    const detailData = await detail.json();
    SetDetailmovie(detailData);
    console.log(detailData);
  };
  return (
    <div>
      {Detailmovie && (
        <section className="w-full h-screen" relative>
          <div className="h-2/3" relative>
            <img
              src={`https://image.tmdb.org/t/p/original/${Detailmovie.poster_path}`}
              alt={Detailmovie.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="container">
            <img
              src={`https://image.tmdb.org/t/p/original/${Detailmovie.poster_path}`}
              alt={Detailmovie.title}
              className="h-full w-52 object-cover rounded-md"
            />
            <div className="ms-4 text-white">
              <h3 className="text-4xl font-semibold">{Detailmovie.title}</h3>
              <p className="mb-4">
                <span className="text-lg font-medium text-red-500">
                  Runtime :
                </span>
                {Detailmovie.runtime} min
              </p>
              {Detailmovie.genres &&
                Detailmovie.genres.map((g) => (
                  <p
                    key={g.id}
                    className=" bg-red-500 px-2 py-2 rounded-xl font-bold me-1 inline-block"
                  >
                    {g.name}
                  </p>
                ))}
              <h2 className="text-xl my-3">{Detailmovie.overview}</h2>

              <Link
                className="font-bold px-2 py-2 rounded-lg bg-red-400 mb-10"
                to={`${Detailmovie.homepage}`}
              >
                <PlayIcon className="w-6 inline-block h-5 me-1" />
                Watch Now
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Details;
