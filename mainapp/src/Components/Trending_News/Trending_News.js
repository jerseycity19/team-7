import React, {useState} from 'react';

import './Trending_News.css';
import NavBar from '../NavBar'

function Trending_News() {

    const [articles, updateArticles] = useState([]);

    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=31963dd472a14a70a7a284e7e480ff92')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        var articles = data.articles;
        var titles = [];
        for(var i = 0; i < articles.length; i++){
            titles.push(articles[i].title);
        }
        updateArticles(titles);
    })
    .catch(console.log)

    return (
        <div className="Trending_News">
        <NavBar />
            <ul id="articles_list">
                {articles.map(i => {
                    return <Article title={i}></Article>
                })}
            </ul>
        </div>
    );
}

function Article(props){
    return (
        <li>{props.title}</li>
    ); 
}

export default Trending_News;
