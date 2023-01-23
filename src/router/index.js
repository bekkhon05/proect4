import React from "react";
import { Routes, Route} from "react-router-dom";
import Magazin from "../pages/Magazin";
import Faq from "../pages/Faq";

const Router = () => {
  return (
    <Routes>
      <Route path="/magazin" element={<Magazin />} />
      <Route path="/faq" element={<Faq />} />       
    </Routes>
  );
};

export default Router;
