import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom"; 
import Nav from './Nav';
import Contacts from './Contacts';
import AddContact from './AddContact';
import EditContact from './EditContact';
import './app.css';
function App() {
    return (
        <Router>
        <>
            <Nav/>
            <div className="container mt-5">
                <div className="row">
                   <div className="col-md-12"> 
                            <Switch>
                                <Route path="/" exact component={Contacts}/> 
                                <Route path="/addContact" exact component={AddContact}/> 
                                <Route path="/editContact/:id" exact component={EditContact}/> 
                            </Switch> 
                   </div>

                </div>

            </div>
            
           
        </>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
