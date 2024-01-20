import React,{useState,useEffect} from 'react'
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const MoviesDetails = () => {
    const [movie, setMovie] = useState([])
    const param = useParams();
// Get Movies Details 
    const getAllMoviesDetials= async ()=>{
    const res = await  axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=d672df6415f38db3264df07da7c0ffad&append_to_response=videos%2Cimages`)
    setMovie(res.data)
    // console.log(res.data)
}
    useEffect(() => {

        getAllMoviesDetials()
    }, [])



    return (
        <div>
        <Row className="justify-content-center">
            <Col md="12" xs="12" sm="12" className="mt-4 ">
                <div className="card-detalis  d-flex align-items-center ">
                    <img
                        className="img-movie w-30"
                        src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}alt="ascad"/>
                    <div className="justify-content-center text-center  mx-auto">
                        <p className="card-text-details border-bottom">
                            Movie Name: {movie.title}
                        </p>
                        <p className="card-text-details border-bottom">
                            Realse Date: {movie.release_date}
                        </p>
                        <p className="card-text-details border-bottom">
                            Rate Count: {movie.vote_count}
                        </p>
                        <p className="card-text-details border-bottom">
                            Rate: {movie.vote_average}
                        </p>
                    </div>
                </div>
            </Col>
        </Row>

        <Row className="justify-content-center">
            <Col md="12" xs="12" sm="12" className="mt-1 ">
                <div className="card-story  d-flex flex-column align-items-start">
                    <div className="text-center p-4 ">
                        <p className="card-text-title border-bottom fs-5">Story: {movie.overview}</p>
                    </div>
                    <div className="text-end px-2">
                        <p className="card-text-story"></p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className="justify-content-center pb-3">
            <Col
                md="10"
                xs="12"
                sm="12"
                className="mt-2 d-flex justify-content-center ">
                <Link to="/">
                    <button style={{ backgroundColor: "#b45b35", border: "none" }}className=" mt-5 btn btn-primary mx-2">Back to Main Page</button>
                </Link>
                <a href={movie.homepage} target="_blank">
                    <button
                        style={{ backgroundColor: "#b45b35", border: "none" }}
                        className="btn btn-primary mt-5 ">
                        Watch Now
                    </button>
                </a>
            </Col>
        </Row>
    </div>
    )
}

export default MoviesDetails
