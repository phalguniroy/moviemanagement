import React, { useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { SearchCard } from "./SearchCard";

export const Watchlist = () => {
    const { watchlist, templist, addTemplist, addMovieToWatched, watched} = useContext(GlobalContext)
    console.log(watchlist)
    const handleWatchedList =()=>{
        for(let i =0; i< templist.length; i++){
        let isPresentMovie = watched.find(object => object.imdbID === templist[i].imdbID)
        if(isPresentMovie)
          continue;
        addMovieToWatched(templist[i])
        }

    }
    const handleRemoveWishList =()=>{
     let list = watchlist.filter(f=>!templist.includes(f))
    }
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
              {templist.length>0 && watchlist.length > 0 && <div className="flex-container mb-3">
  <button className="ml-2  btn btn-warning btn-lg " onClick={handleWatchedList}>Add to Watched List</button>
  <button className="ml-2  btn btn-info btn-lg " onClick={handleRemoveWishList}>Remove from Wish List</button>
  </div>}
        </div>
    )
}
