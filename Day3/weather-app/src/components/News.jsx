import React, { useEffect, useState } from 'react'

const News = () => {
    //API Top NYT: https://developer.nytimes.com/docs/top-stories-product/1/overview
    const [data, setData] = useState([]);
    const api_key = import.meta.env.VITE_NYT_API_KEY;
    useEffect(() => {
        const fetchNews = async () => {
            const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${api_key}`
            const response = await fetch(url)
                .catch((err) => (console.error(err)));
            const json = await response.json();
            setData(json.results.slice(0,4));
        }
        fetchNews();
    }, []);
    return (
        <>
            <div id="news-section" className='horizontal-display'>
                {data &&
                    <div id="news-header">
                        <h2>Top News Stories</h2>
                        <img src="news.gif" width="100px"/>
                    </div>
                }
                {data &&
                    data.map((story, index) => (
                        <div className="news-card">
                            {/* <p>{story.section}</p> */}
                            <a className="news-url" href={story.url} target="_blank">Read More</a>
                            <h4>{story.title}</h4>
                            <p className="abstract">{story.abstract.slice(0, 100) + "..."}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default News