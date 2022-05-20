import { func } from "prop-types";
import { async } from "q";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Blog () {
    const [news, setNews] = useState([])
    const [loading, setloading] = useState(true);

    useEffect(() => {
        
        async function getNews() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs')
            const response = await request.json()

            setNews(response)
            console.log(news)
            setloading(false)
        }

        getNews()
    },[]);

    return (
        <> 
            <h2>ini blog</h2>
            <div>
                { loading &&  <h3>loading</h3>  }
                { !loading && (
                    <div>
                        { news.map(function (list) {
                            return (
                                <>
                                <div key={list.id} className="dis-frow  ">

                                    <div>
                                        <img src={list.imageUrl} width="300" alt="" />
                                    </div>

                                    <div>
                                        <h2><Link to={`/blogs/${list.id}`}>{list.title}</Link></h2>
                                        <p>{list.summary}</p>
                                    </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    )
}