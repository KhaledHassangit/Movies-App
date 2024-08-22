import React from 'react'
import {Row} from "react-bootstrap"
import CardMovie from './CardMovie'
import AdvancedPagination from './Pagenation'
import { useSelector,useDispatch } from 'react-redux';
import { getAllMoviesR } from "../Redux/Action/MovieAction";
import { useEffect,useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const Movieslist = () => {

    
    const [Movies, setMovies] = useState([])
    const dispatch = useDispatch()
        // Render
        useEffect(() => {
        dispatch(getAllMoviesR())
        }, [])
    

    const dataMovies = useSelector((state)=> state.movies)
    useEffect(()=>{
        setMovies(dataMovies)
    },[dataMovies])








    return (
        <Row className='mt-3'>
            {
                Movies.length >= 1 ? (Movies.map((movie)=>{
                    return (

                            <CardMovie key={movie.id} movie={movie}/>
                    )
                })): 
                <h2 className='text-center p-5'>No Available Movies at The Mean Time</h2>
            }
            {Movies.length >= 1 ? (<AdvancedPagination />)
            : null}
            
        </Row>
    )
}

export default Movieslist
