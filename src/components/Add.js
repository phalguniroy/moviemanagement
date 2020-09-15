import React, {useState, useContext} from 'react'
import { SearchCard } from "./SearchCard";
import {GlobalContext} from '../context/GlobalState'

export const Add = () => {

    const { addMovieToWatchlist, watchlist, templist, addTemplist, addMovieToWatched, watched} = useContext(GlobalContext)

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [errors, setErrors] = useState("");
    const [dropDown, setDropDown] = useState(2000);

    const onChange = (e) => {
        e.preventDefault();
         setQuery(e.target.value);
      };
    const onChangeDrop =(e)=>{
        setDropDown(e.target.value)
    }
    const handleMovieList = ()=>{
        for(let i =0; i< templist.length; i++){
            addMovieToWatchlist(templist[i])
        }
        
    }
    const handleWatchedList =()=>{
        for(let i =0; i< templist.length; i++){
            addMovieToWatched(templist[i])
        }

    }
    const onSubmit = ()=>{
        let fetchQuery = `https://omdbapi.com/?apikey=32395055&type=movie&s=${query}&y=${dropDown}`
        if(dropDown.length === 0){
           fetchQuery = `https://omdbapi.com/?apikey=32395055&type=movie&s=${query}`  
        }
        fetch(fetchQuery)
            .then((res) => res.json())
            .then((data) => {
              if (data.Response === "True") {
                console.log(data.Search)
                setResults(data.Search);
                setErrors("");
              } 
              else{
                setErrors(data.Error);
                setResults([]);
              }
            });
    }
    return (
        <div>

        
  <div className="flex-container pt-4 pb-4">
    <input
                type="text"
                placeholder="Search for a movie"
                value={query}
                onChange={onChange}
              />
              
              <div>
 <select defaultValue={dropDown} 
 onChange={onChangeDrop} 
 >
    <option value="">None</option>
    <option value="2000">2000</option>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2004">2004</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
    <option value="2013">2013</option>
    <option value="2014">2014</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
  </select>
  </div> 
  <button className="btn btn-primary ml-3" onClick={onSubmit}>search</button>

            </div>
            
  

{results.length > 0  && (
    <div className="flex-photo">
    
      {results.map((movie) => (
        <li key={movie.imdbID}>
          <SearchCard movie={movie} />
        </li>
      ))}

    </div>
  )}
  {errors.length > 0 && (
      <h3 className="flex-container">{errors}</h3>
  )}
  {templist.length>0 && <div className="flex-container mb-3">
  <button className="btn btn-primary btn-lg " onClick={handleMovieList}>Add to Movie List</button>
  <button className="ml-2  btn btn-warning btn-lg " onClick={handleWatchedList}>Add to Watched List</button>
  </div>}
  
        </div>
        
    )
}
