import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import MovieList from '../components/MovieList';
import MyList from '../components/MyList';


function Main()  {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" >
           <MovieList/>
          </Route>
          <Route  path="/my-list">
            <MyList />
          </Route>
        </Switch>
      </div>
    );
  }

export default Main;