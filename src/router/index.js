import React from "react";
import { Routes, Route} from "react-router-dom";

import Blog from "../pages/blog";
import Home from "../pages/home"
import Kontakt from "../pages/kontakt";

import Magazin from "../pages/Magazin";
import Faq from "../pages/Faq";


const Router = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/kontakt" element={<Kontakt />} />
      

      <Route path="/magazin" element={<Magazin />} />
      <Route path="/faq" element={<Faq />} />       

    </Routes>
  );
};

export default Router;
