import { AllMOVIES } from "../Type/MoviesType";

// 2- Create Reducer And Export it to MyStore
const initialValue = {movies:[],pageCount:0}

export const MovieReducer = (state =initialValue ,action)=>{

    switch(action.type ){
        case AllMOVIES:
            return {movies: action.data, pageCount:action.pages}
            default:
                return state;
    }


}