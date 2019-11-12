import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Home2 from './Components/Home2';
import Show from './Components/Show';
import Edit from './Components/Edit';


function App() {
  return (
    <BrowserRouter>
      <Route path="/home" exact component={Home} />
      <Route path="/home2" exact component={Home2} />
      <Route path="/" exact component={Login} />
      <Route path="/show/:id" render={(props) => <Show {...props}/>}/>
      <Route path="/edit/:id" render={(props) => <Edit {...props}/>}/>
        {/* <Route path="/delete/:id" render={(props) => <Delete {...props}/>}/> */}
    </BrowserRouter>
  );
}

export default App;
