import React from "react";
import NavBar from "./Components/NavBar";
import { Container } from "react-bootstrap";
import Movieslist from "./Components/Movieslist";
import MoviesDetails from "./Components/MoviesDetails";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./Components/ScorllTop";

function App() {
  return (
    <BrowserRouter>
      <div className="font color-body">
        <ScrollTop />
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Movieslist />} />
            <Route path="/movie/:id" element={<MoviesDetails />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
