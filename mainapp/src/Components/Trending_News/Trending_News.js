import React, {useState} from 'react';

import './Trending_News.css';
import NavBar from '../NavBar'
import LoginControl from '../LoginControl';

function Trending_News() {

    const [articles, updateArticles] = useState([]);

    console.log(process.env.NEWS_API_KEY);

    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b7d22deef9054af9af9587d645a4a5be')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        var articles = data.articles;
        var titles = [];
        for(var i = 0; i < articles.length; i++){
            titles.push({title: articles[i].title, link: articles[i].url});
        }
        updateArticles(titles);
    })
    .catch(console.log)

    return (
        <div className="Trending_News">
            <LoginControl />
            <h1>What's Happening In the World</h1>
            <ul id="articles_list">
                {articles.map(i => {
                    return <Article title={i.title} link={i.link}></Article>
                })}
            </ul>
        </div>
    );
}

function Article(props){
    return (
        <li>
            <p className="Article"><span>{props.title}</span><form action={'http://hangouts.google.com/start'}>
            <input type="submit" className="talkButton" value="Talk!" /></form><form action={props.link}>
            <input type="submit" className="learnButton" value="Learn!" /></form></p>
      </li>
    ); 
}

export default Trending_News;
