import React from "react";
import { Routes, Route} from "react-router-dom";
import Blog from "../pages/blog";
import Home from "../pages/home"
import Kontakt from "../pages/kontakt";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/kontakt" element={<Kontakt />} />
      
    </Routes>
  );
};

export default Router;
