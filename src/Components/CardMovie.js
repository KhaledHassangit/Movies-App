import React from 'react'
import {Col} from "react-bootstrap"
import { Link } from 'react-router-dom'
import {Fade} from "react-awesome-reveal"
const CardMovie = ({movie,key}) => {
    return (
        <Col xs="12" sm="12" lg="3" md="4" className='my-1 '>
        <Fade  triggerOnce={true} cascade={false} delay={key * 100}>
            <Link to={`/movie/${movie.id}`}>
            <div className='card'>
                <img className='card__image ' src={`https://image.tmdb.org/t/p/w500/` +movie.poster_path} alt=''/>
                <div className='card__overlay'>
                    <div className='overlay__text text-center w-100 p-2'>
                        <p>Movie Name:{movie.original_title}</p>
                        <p>Release Data:{movie.release_date}</p>
                        <p>Rate Counts:{movie.vote_count}</p>
                        <p>Rate :{movie.vote_average}</p>
                    </div>
                </div>
            </div>
            </Link>
            </Fade>
        </Col>
    )
}

export default CardMovie
