import React from 'react'
import {Row,Container,Col} from "react-bootstrap"
import logo from "../IMG/logo.png"
import {Fade, Rotate} from "react-awesome-reveal"
import { useDispatch } from 'react-redux';
import { getAllMoviesR,MoviesSearch } from '../Redux/Action/MovieAction';
import ScrollTop from './ScorllTop';
const NavBar = () => {
    const onSearch =(word)=>{
        search(word)
    }

    const dispatch = useDispatch()
      // Search Input 
    const search= async (word)=>{
        if(word === ""){
        dispatch(getAllMoviesR())
        }
            
        else{
            
            dispatch(MoviesSearch(word))
        }
    }
    return (
        <>

        <div className='nav-style w-100'>
            <Container>
                <Row className='pt-2'>
                    <Col xs="3" lg="1">
                        <Fade direction='left' triggerOnce={true} >
                        <a href='/'><img src={logo} alt=""  className='logo'/></a>
                        </Fade>
                    </Col>
                    <Col  xs="9" lg="11" className='d-flex  align-items-center'>
                        <div className='search w-100'>
                            <i class="fa fa-search"></i>
                            <input  onChange={(e) => onSearch(e.target.value)} type='text' placeholder='Serch' className='form-control'/>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default NavBar
