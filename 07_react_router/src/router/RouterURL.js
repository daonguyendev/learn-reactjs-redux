import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import News from '../components/News';
import Home from '../components/Home';
import Contact from '../components/Contact';
import NewsDetail from '../components/NewsDetail';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/news/:slug.:id.html" component={NewsDetail}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        );
    }
}

export default RouterURL;