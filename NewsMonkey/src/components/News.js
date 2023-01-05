import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class News extends Component {
  static defaultProps = {
    country: 'usa',
    pageSize: 'general',
  }
  static propTyes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }

  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cff3bd233fd64345916309703a080029&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false
    })

  }
  handPrevClick = async () => { 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cff3bd233fd64345916309703a080029&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      loading: false,
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }
  handNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cff3bd233fd64345916309703a080029&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      this.setState({
        loading: true
      })
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData)
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      })
    }
  }
  render() {
    return (
      <div className='container'>
        <h2 className='text-center' style={{padding: "2rem 0"}}>News Monkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {
            !this.state.loading && this.state.articles.map((e) => {
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