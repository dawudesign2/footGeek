import { useContext } from 'react'
import infoContext from '../../context/infoContext'

import Card from '../../components/news/card'

const News = () => {
   
    const info = useContext(infoContext)
    




    return (
        <>
            <h1>Actualités</h1>
        
            {
                info.map((item,i)=> {

                    return <Card key={i} {...item} />
                })
                
            }
        </>
    )
}


export default News;