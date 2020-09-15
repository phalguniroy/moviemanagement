import React,{ useContext }  from "react";
import {GlobalContext} from '../context/GlobalState'
import { Watchlist } from "./Watchlist";

export const SearchCard = ({ movie }) => {
    const { addMovieToWatchlist, watchlist, templist, addTemplist, addMovieToWatched, watched} = useContext(GlobalContext)

    let savedMovie = watchlist.find(object => object.imdbID === movie.imdbID)
    const watchlistDisabled = savedMovie ? true : false;
    return (<div>
        <div className="card mb-3" style={{width:"540px"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={`${movie.Poster}`} className="card-img" alt={`${movie.Title} Poster`} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">{movie.Title}</h1>
        <h3 className="card-text">Year : {movie.Year}</h3>
        <p className="card-text"><small className="text-muted">Micro Movie Management Services</small></p>
        <h5>Add movie to list <input onClick={()=>addTemplist(movie)} className="ml-2 check" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input></h5>
        
        <button onClick={()=>addMovieToWatchlist(movie)} disabled={watchlistDisabled}>add</button>
      </div>
    </div>
  </div>
</div>
          </div>)
    }