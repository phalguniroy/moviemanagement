import React,{ useContext }  from "react";
import {GlobalContext} from '../context/GlobalState'
import { Watchlist } from "./Watchlist";

export const SearchCard = ({ movie }) => {
    const { addMovieToWatchlist, watchlist, addTemplist, watched} = useContext(GlobalContext)

    let savedMovie = watchlist.find(object => object.imdbID === movie.imdbID)
    const text = savedMovie ? `added to wishlist` : `Add to wishlist`;
    const watchedMovie = watched.find(object => object.imdbID === movie.imdbID)
    const watchStatus = watchedMovie ? `watched` : `not watched`;
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
        <h5>{text}<input onClick={()=>addTemplist(movie)} className="ml-2 check" type="checkbox"></input></h5>
        <p>{watchStatus}</p></div>
    </div>
  </div>
</div>
          </div>)
    }