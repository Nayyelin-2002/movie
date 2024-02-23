import { PlayIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <Link
      to={`/details/${props.popmov.id}`}
      className="rounded-lg overflow-hidden relative"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${props.popmov.poster_path}`}
        alt={props.popmov.title}
        className="w-full object-cover"
      />
      <div className="dark-ov"></div>
      <PlayIcon className="iconP" />
    </Link>
  );
}

export default Cards;
