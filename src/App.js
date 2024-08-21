import React,{useEffect,useState} from "react";
import NavBar from "./Components/NavBar";
import { Container } from "react-bootstrap";
import Movieslist from "./Components/Movieslist";
import MoviesDetails from "./Components/MoviesDetails";
import "./style.css";
import axios from "axios";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"


function App() {

  return (
    <div className="font color-body">
        <NavBar />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Movieslist />}/>
              <Route path="/movie/:id" element={<MoviesDetails/>}/>
            </Routes>
          </BrowserRouter>
        </Container>
    </div>
    
  );
}

export default App;
