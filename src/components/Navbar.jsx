import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const [Searchkey, setSearchkey] = useState("");
  const navigateUrl = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log(Searchkey);
    navigateUrl(`/search/${Searchkey}`);
    setSearchkey("");
  };
  return (
    <nav className="flex items-center justify-between bg-black text-white px-5 py-4 fixed w-full z-10 top-0">
      <NavLink to={"/"} className="text-3xl font-bold font-mono ">
        MovieX
      </NavLink>
      <div className="flex items-center space-x-3 justify-center">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? "isactive" : "isnonactive";
          }}
        >
          Popular
        </NavLink>
        <NavLink
          to={"/upcoming"}
          className={({ isActive }) => {
            return isActive ? "isactive" : "isnonactive";
          }}
        >
          Upcoming
        </NavLink>
      </div>
      <form
        action=""
        className="flex items-center justify-center"
        onSubmit={search}
      >
        <input
          type="text"
          className="text-xl bg-transparent border-b-2 border-b-slate-300 focus:outline-none"
          value={Searchkey}
          onChange={(e) => setSearchkey(e.target.value)}
        />
        <button type="submit">
          <MagnifyingGlassIcon className="w-8 h-8" />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
