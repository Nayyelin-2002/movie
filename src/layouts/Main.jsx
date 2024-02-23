import React from "react";
import Details from "../Pages/Details.jsx";
import { Routes, Route } from "react-router-dom";
import Popularpage from "../Pages/Popularpage.jsx";
import Upcomingpage from "../Pages/Upcomingpage";
import Navbar from "../components/Navbar";
import Search from "../Pages/Search.jsx";
function Main() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route index element={<Popularpage />} />
        <Route element={<Upcomingpage />} path="/upcoming" />
        <Route element={<Details />} path="/details/:id" />
        <Route element={<Search />} path="/search/:title" />
      </Routes>
    </section>
  );
}

export default Main;
