import React, { useEffect, useState } from 'react'


export default function Index({ match }) {
    const [show, setShow] = useState([])
    console.log(show)
    useEffect(()=> {
        const url = "https://newsapi.org/v2/everything?domains=sofoot.com&apiKey=9754d0ca672246ddbb47e77f01f331ce";
     fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data) || setShow(data.articles[match.params.id]))
        
},[])

return (
    <div>
        <h1>titlte</h1>


    </div>

)

}


