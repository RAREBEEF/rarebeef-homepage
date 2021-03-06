import React, { ReactElement, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Contact from "../routes/Contact";
import About from "../routes/About";
import Nav from "./Nav";
import Toolbar from "./Toolbar";
import { getGuestBookThunk } from "../redux/modules/getGuestBook";
import { useDispatch } from "react-redux";

const App = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect((): void => {
    dispatch<any>(getGuestBookThunk());
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <Toolbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
