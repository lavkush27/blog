import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AddComponent from '../src/component/AddPost'
import BlogListComponent from '../src/component/BlogList';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link className='input-container w' to={'/add'}>ADD BLOG</Link>
          <Link className='input-container w' to={'/list'}>BLOG LIST</Link>
          <Route exact path='/add' component={AddComponent} />
          <Route exact path='/list' component={BlogListComponent} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
