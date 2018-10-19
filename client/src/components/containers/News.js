import React, { Component} from 'react';
import NewsItemListing from '../presentation/NewsItemListing';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/newsActions';

class News extends Component {
    componentDidMount(){
        this.props.dispatch(fetchNews());
    }
    render(){

        const newsItems = this.props.news.map( (news, i) => {
            return ( <li key={i}><NewsItemListing data = {news} /></li> );
        });

        return (
            <div>
                <h2>News Items</h2>
                <ul>
                    {newsItems}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.newsRedu.news
    }
}

export default connect(mapStateToProps)(News)