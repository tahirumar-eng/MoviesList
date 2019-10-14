import React, { Component } from 'react';
import Movie from './Movie';
import {Route,Redirect,Switch} from 'react-router-dom';
import Customer from './Customer';
import Rentals from './Rentals';
import NotFound from './NotFound';
import Navbar from './Navbar';
import MovieForm from './MovieForm';
import LoginForm from './LoginForm';
import Register from './Register';



 class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
            <main>
                 

                <Switch>
                <Route  path="/login"  component={LoginForm}/>
                {/* <Route  path="/Movie/id"  component={MovieForm}/> */}
                <Route  path="/Movie" component={Movie}/>
                <Route path="/movieform" component={MovieForm}/>
                <Route path="/Customer" component={Customer}/>
                <Route path="/rentals" component={Rentals}/>
                <Route path="/not-found" component={NotFound}/> 
                <Route path="/register" component={Register}/> 
                <Redirect from="/" exact to ="Movie"/>
                <Redirect  to ="/not-found"/>
                </Switch>
                
            </main>
            </React.Fragment>
        )
    }
}

export default App
