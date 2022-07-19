import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import infoContext from '../../context/infoContext';


const Articles = () => {


    const info = useContext(infoContext)
    const { id } = useParams()
    const data = info.findIndex(obj => obj.publishedAt === id)


    return (
        <>
        <div className='seb_articlepage__card'>
            {<h1 className='seb_articlepage__title'>{info[data].title}</h1>}
            {<img src={info[data].urlToImage} alt={info[data].title}/>}
            {<p className='seb_articlepage__desc'>{info[data].description}</p>}            
            </div>
        </>
    )
}


export default Articles