import React, { useReducer } from 'react'
import { reducer } from '../reducer/search-reducer';
import { search } from '../action/search-action';
const SearchContext = React.createContext();

const initialState = {
    isLoading: true,
    message: "",
    courses: [],
    instructors: [],
}

const SearchProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)
   
    return (
        <SearchContext.Provider
            value={{ state, 
                search: search(dispatch)
            }}
        >
            {props.children}
        </SearchContext.Provider>
    )
}

export { SearchProvider, SearchContext }
