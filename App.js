import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import {CreateRoom} from '../src/routes/CreateRoom'
import {Room} from '../src/routes/Room';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CreateRoom}/>
        <Route path="/room/:roomID" component={Room}/>
      </Switch>
      
      </BrowserRouter> 
    </div>
  )
}

export default App;