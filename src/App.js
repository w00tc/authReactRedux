import React, {Component, useEffect} from 'react';
import './App.css';
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import {BrowserRouter, Route} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {Main} from "./Components/Main/Main";

class App extends Component {

    render() {
        if (this.props.isAuthenticated === true && this.props.isLogged === false) {
            return (
                <div className="App">
                    <BrowserRouter>
                        <Redirect to='/login'/>
                        <Route path="/login" component={SignIn}/>
                        <Route path="/register" component={SignUp}/>
                        <Route path="/main" component={Main}/>
                    </BrowserRouter>
                </div>)
        } else if (this.props.isAuthenticated === true && this.props.isLogged === true) {
            return (
                <div className="App">
                    <BrowserRouter>
                        <Redirect to='/main'/>
                        <Route path="/login" component={SignIn}/>
                        <Route path="/register" component={SignUp}/>
                        <Route path="/main" component={Main}/>
                    </BrowserRouter>
                </div>)
        }
        return (
            <div className="App">
                <BrowserRouter>
                    <Route path="/login" component={SignIn}/>
                    <Route path="/register" component={SignUp}/>
                    <Route path="/main" component={Main}/>
                </BrowserRouter>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(App);
