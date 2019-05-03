import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <React.Fragment>
          <Navbar/>
          <div className = "container">
            <Switch>
              <Route exact path = "/" component = {Index}/>
              <Route exact path = "/lyrics/track/:id" component = {Lyrics}/>
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
