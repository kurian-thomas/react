import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import Post from '../posts/posts';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
