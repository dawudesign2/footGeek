import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import infoContext from '../../context/infoContext';


const Articles = () => {


    const info = useContext(infoContext)
    const { id } = useParams()
    const data = info.findIndex(obj => obj.publishedAt === id)


    return (
        <>
            {<h1>{info[data].title}</h1>}
            {<img src={info[data].urlToImage} alt={info[data].title}/>}
            {<p>{info[data].description}</p>}            
        </>
    )
}


export default Articles