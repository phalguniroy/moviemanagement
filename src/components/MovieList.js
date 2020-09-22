import React, { useState, useCallback } from 'react';
import { useDispatch } from "react-redux";
import { addToList } from "../redux/actions";
import { Row, Col, Navbar, Button, Alert, InputGroup, FormControl } from 'react-bootstrap';
import Movie from '../components/Movie';
import Error from '../components/Error';


const MovieList =() => {
    const dispatch = useDispatch();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState();
    const [year, setYear] = useState();
    const [checkedList, setCheckedList] = useState([]);
    const [alert, setAlert] = useState();
    const [query, setQuery] = useState("");


    const onChange = (e) => {
        e.preventDefault();
         setQuery(e.target.value);
      };

    const onSubmit = ()=>{
        let fetchQuery = `https://omdbapi.com/?apikey=32395055&type=movie&s=${query}&y=${year}`
            if(movies.length === 0){
               fetchQuery = `https://omdbapi.com/?apikey=32395055&type=movie&s=${query}`  
            }
            fetch(fetchQuery)
                .then((res) => res.json())
                .then((data) => {
                  if (data.Response === "True") {
                    setMovies(data.Search);
                    setError("");
                  } 
                  else{
                    setError(data.Error);
                    setMovies([]);
                  }
                });
        
    }
    const onChangeDrop =(e)=>{
        setYear(e.target.value)
    }




    const updateCheckedList = useCallback((indexNum, status) => {
        if (status) {
            const movieByIndex = movies[indexNum];
            setCheckedList([movieByIndex, ...checkedList]);
        } else {
            const movieByIndex = movies[indexNum];
            const filteredCheckedList = checkedList.filter((movie) => { return movie.imdbID !== movieByIndex.imdbID; });
            setCheckedList(filteredCheckedList);
        }
    }, [checkedList, movies])

    // creating years array [2000 - 2020]
    const yearArray = [2000];
    while (yearArray[yearArray.length - 1] < 2020) {
        yearArray.push(yearArray[yearArray.length - 1] + 1);
    }

    const handleAddToListClick = useCallback((exp, index) => {
        if (index || index === 0) {
            const movieByIndex = movies[index];
            dispatch(addToList([movieByIndex], exp));
        } 
        else {
            dispatch(addToList(checkedList, exp));
        }
    }, [checkedList, dispatch, movies])

    const popAlert = useCallback((m,v) => {
        setAlert({message: m, variant: v});
        setTimeout(()=>{setAlert(null)},1000);
    },[])


    if (error)
        return <Error message={error} />

    return (<div>
        <Row>
            <Col>
                <Navbar className="justify-content-between">
                    <div inline="true">
                    <InputGroup className="mb-3">
    <FormControl
      placeholder="Movie Name"
      value={query}
      onChange={onChange}
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" onClick={onSubmit}>Search</Button>
    </InputGroup.Append>
  </InputGroup>
                        <select onChange={onChangeDrop} >
                        <option value="" selected disabled hidden>Choose here</option>
                            {yearArray.map((year) => {
                                return <option key={year} value={year}>{year}</option>
                            })}
                        </select>
                    </div>
                    <div inline="true" className="addButton">
                        <Button variant="success" disabled={checkedList.length < 1} onClick={() => { handleAddToListClick('AddToMyList'); popAlert('Successfully added to my list !', 'success') }}>Add to my list</Button>
                        <Button variant="success" disabled={checkedList.length < 1} onClick={() => { handleAddToListClick('AddToMyWatchedList'); popAlert('Successfully added to my watched list !', 'success') }} className='ml-2'>Add to my watched list</Button>
                    </div>
                </Navbar>
            </Col>
        </Row>
        <Row>
            <Col>
            {alert && <Alert className='p-1 mt-3' variant={alert.variant}>{alert.message}</Alert>}
            {!movies.length && <h2 className="m-5">Type and search movie</h2>}
                {movies.map((movie, index) => {
                    return <Movie key={movie.imdbID} index={index} updateCheckedList={(indexNum, status) => { updateCheckedList(indexNum, status); }} handleAddToListClick={(exp, index) => { handleAddToListClick(exp, index) }} title={movie.Title} year={movie.Year} poster={movie.Poster} />
                })}
            </Col>
        </Row>
        <br></br>
        <br></br>
    </div>
    );
}

export default MovieList;