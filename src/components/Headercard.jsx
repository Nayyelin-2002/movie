import { PlayCircleIcon } from "@heroicons/react/24/solid";

function Headercard(props) {
  return (
    <div className="h-full w-full relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`}
        className="image"
        alt={props.movie.title}
      />
      <div className="dark-ov">
        <div className="text-box">
          <h1 className="text-2xl font-bold">{props.movie.title}</h1>
          <p className="des">{props.movie.overview}</p>
          <button className="bg-white text-black px-3  py-3 rounded-md font-medium text-lg mt-5">
            <PlayCircleIcon className="w-7 inline-block h-7 align-center mx-0.5" />
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Headercard;
