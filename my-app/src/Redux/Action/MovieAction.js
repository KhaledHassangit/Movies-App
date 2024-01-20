import { AllMOVIES } from "../Type/MoviesType"
import axios from "axios";
import { MoviesApi } from "../Type/MoviesType"

// Action => Dispatch,Select 
export const  getAllMoviesR=  ()=>{

    // Heigher Order Function 
    return async (Dispatcher)=>{
    // Api Request 
    const res = await  axios.get(MoviesApi)
    Dispatcher({type :AllMOVIES,data:res.data.results,pages:res.data.total_pages})
    }
}
export const  MoviesSearch=  (word)=>{

    // Heigher Order Function 
    return async (Dispatcher)=>{
    // Api Request 
    const res = await  axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=d672df6415f38db3264df07da7c0ffad`)
    Dispatcher({type :AllMOVIES,data:res.data.results,pages:res.data.total_pages})
    }
}
export const  GetPages=  (pageN)=>{

    // Heigher Order Function 
    return async (Dispatcher)=>{
    // Api Request 
    const res = await  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d672df6415f38db3264df07da7c0ffad&append_to_response=videos,images&page=${pageN}`)
    Dispatcher({type :AllMOVIES,data:res.data.results,pages:res.data.total_pages})
    }
}




