import React, { useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { SearchCard } from "./SearchCard";

export const Watchlist = () => {
    const { watchlist} = useContext(GlobalContext)
    console.log(watchlist)
    return (<div>
            <h5 className="flex-container m-3">Movie wishlist</h5>
            { (
                <div className="flex-photo">
                
                  {watchlist.map((movie) => (
                    <li key={movie.imdbID}>
                      <SearchCard movie={movie} />
                    </li>
                  ))}
            
                </div>
              )}
        </div>
    )
}
