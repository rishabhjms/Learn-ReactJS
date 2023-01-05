import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import PropTypes from 'prop-types'
export default class App extends Component {

  componentDidMount(){
    document.title = "News Monkey - Daily News"
  }
  render() {
    return (
      <>
      <Navbar/>
      <News pageSize={3*6} country='in' category='technology'/>
      </>
    )
  }
}
