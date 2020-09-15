import React, { useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { SearchCard } from "./SearchCard";

export const Watched = () => {
    const {  watched} = useContext(GlobalContext)
    console.log(watched)
    return (<div>
            <h5 className="flex-container m-3">Movie watched</h5>
            { (
                <div className="flex-photo">
                
                  {watched.map((movie) => (
                    <li key={movie.imdbID}>
                      <SearchCard movie={movie} />
                    </li>
                  ))}
            
                </div>
              )}
            
        </div>
    )
}
