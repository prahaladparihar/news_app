import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// JSON DB
import JSON from './db.json'

// Components
import Header from './components/header.jsx'
import NewsList from './components/news_list.jsx'


class App extends Component {
    state = {
        news: JSON,
        filtered_news: []
    }
    getKeyword = (event) => {
        // console.log(event.target.value)
        let keyword = event.target.value.toUpperCase()
        let filtered_news = this.state.news.filter((item) => {
            return new RegExp(keyword, 'i').test(item.title)
        })
        this.setState({
            filtered_news
        })
    }
    render(){
        let NewsFiltered = this.state.filtered_news
        let NewsWhole = this.state.news
        return (
            <div>
                <Header keyword = {this.getKeyword}/>
                <NewsList news={NewsFiltered.length === 0 ? NewsWhole : NewsFiltered} />
            </div>
        )
    }   
}

ReactDOM.render(<App/>, document.querySelector('#root'))