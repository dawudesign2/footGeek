import { useState, useEffect } from 'react'

import Card from '../../components/news/card'

const News = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        const url = "https://newsapi.org/v2/everything?domains=sofoot.com&apiKey=9754d0ca672246ddbb47e77f01f331ce";
        fetch(url)
            .then((res) => res.json())
            .then((data) => console.log("useEffect",data) || setInfo(data.articles))
    }, [])



    return (
        <>
            <h1>Actualités</h1>
        
            {
                info.map((item, i)=> {
                    return <Card id={i} {...item} />
                })
                
            }
        </>
    )
}


export default News;