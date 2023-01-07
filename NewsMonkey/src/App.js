import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
export default class App extends Component {

  componentDidMount() {
    document.title = "News Monkey - Daily News"
  }
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<News country='in' pageSize={20} category='science'></News>}></Route>
          <Route path='/business' ></Route>
          <Route path='/entertainment' ></Route>
          <Route path='/health' ></Route>
          <Route path='/science' ></Route>
          <Route path='/sports' ></Route>
          <Route path='/technology' ></Route>
        </Routes>
      </Router>
    )
  }
}
