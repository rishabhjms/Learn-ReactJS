import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 0
    }

  }

  async componentDidMount() {
    let url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-11-23&sortBy=publishedAt&apiKey=cff3bd233fd64345916309703a080029&page=1'
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
    })

  }
  handPrevClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-11-23&sortBy=publishedAt&apiKey=cff3bd233fd64345916309703a080029&page=${this.state.page - 1}&pageSize=20`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }
  handNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    } else {
      let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-11-23&sortBy=publishedAt&apiKey=cff3bd233fd64345916309703a080029&page=${this.state.page + 1}&pageSize=20`
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData)
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults
      })
    }
  }
  render() {
    console.log("Hello I am render function")
    return (
      <div className='container my-3'>
        <h2>News Monkey Top Headlines</h2>
        <div className="row">
          {
            this.state.articles.map((e) => {
              return <div className="col-md-4" key={e.url} >
                <Newsitem title={e.title ? e.title : ""} description={e.description ? e.title : "..."} imgUrl={e.urlToImage === null ? e.urlToImage = 'https://i.insider.com/5dfba45ee94e860d59646b66?width=1200&format=jpeg' : e.urlToImage} newsURL={e.url} />
              </div>
            })
          }
        </div>
        <div className="container d-flex justify-content-between">
          <button className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handPrevClick}>&larr; Previous</button>
          <button className="btn btn-dark" onClick={this.handNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}