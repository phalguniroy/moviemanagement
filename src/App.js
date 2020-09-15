import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Header} from './components/Header'
import {Watchlist} from './components/Watchlist'
import {Add} from './components/Add'
import {Watched} from './components/Watched'
import './App.css';
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <Router>
    <Header />
    <Switch>
    <Route exact path="/">
    <Add />
    </Route>
    <Route exact path="/watchlist">
    <Watchlist />
    </Route>
    <Route exact path="/watched">
    <Watched />
    </Route>

    </Switch>
    </Router>
    </GlobalProvider>
  )
}

export default App;
