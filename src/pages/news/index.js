import axios from 'axios'
import Card from '../../components/news/card'

const News = () => {

    const search = () => {
        axios.get("https://newsapi.org/v2/everything?q=psg&from=2022-05-22&sortBy=publishedAt&apiKey=9754d0ca672246ddbb47e77f01f331ce")
             .then(res => console.log(res.data))
      }
      search();

    return(
        <>
            <h1>News</h1>
            <Card />
            <Card /> 
            <Card />
            <Card />

        </>
    )
}


export default News;