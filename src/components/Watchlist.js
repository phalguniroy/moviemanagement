import React, {useContext, GlobalContext} from 'react'
import { SearchCard } from "./SearchCard";

export const Watchlist = () => {
    const { addMovieToWatchlist, watchlist, templist, addTemplist, addMovieToWatched, watched} = useContext(GlobalContext)
    console.log(watchlist)
    return (<div>
            <h1>watch list page</h1>
            {watchlist.length > 0  && (
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
