import React, {Component} from 'react';
import './App.css';
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import {HashRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Main} from "./Components/Main/Main";

class App extends Component {

    render() {
        if (this.props.isAuthenticated === true && this.props.isLogged === false) {
            return (
                <div className="App">
                    <HashRouter>
                        <Redirect to='/'/>
                        <Route exact path="/" component={SignIn}/>
                        <Route path="/register" component={SignUp}/>
                        <Route path="/main" component={Main}/>
                    </HashRouter>
                </div>)
        } else if (this.props.isAuthenticated === true && this.props.isLogged === true) {
            return (
                <div className="App">
                    <HashRouter>
                        <Redirect to='/main'/>
                        <Route exact path="/" component={SignIn}/>
                        <Route path="/register" component={SignUp}/>
                        <Route path="/main" component={Main}/>
                    </HashRouter>
                </div>)
        }
        return (
            <div className="App">
                <HashRouter>
                    <Route exact path="/" component={SignIn}/>
                    <Route path="/register" component={SignUp}/>
                    <Route path="/main" component={Main}/>
                </HashRouter>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(App);
