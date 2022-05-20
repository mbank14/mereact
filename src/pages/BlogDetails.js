import { func } from "prop-types";
import { async } from "q";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function BlogDetails () {
    const params = useParams()
    const [newsDetail, setNewsDetail] = useState({})
    const [loading, setloading] = useState(true)


    useEffect(() => {
        async function getNewsDetail() {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/blogs/${params.id}`)
            const response = await request.json()   

            setNewsDetail(response)
            console.log(newsDetail)
            setloading(false)
        }

        getNewsDetail()

    }, [params]);

    return (
        <>
            <h2>ini blog BlogDetails</h2>
            {
                loading && <h3>Loading . . .</h3>
            }
            { !loading && (
                <div>
                    <div>
                        <h3>{newsDetail.title}</h3>
                        <p>{newsDetail.summary}</p>
                    </div>
                    
                </div>
            )}
        </>
    )
}