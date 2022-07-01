import { Link } from "react-router-dom"


const Card = (props) => {

    
    return(
        <Link to={`/articles/${props.publishedAt}`}>
        <article id={props.id}>
            <img src={props.urlToImage} alt={props.title}/>
          <h1>{props.title}</h1>
          <h4>{props.description}</h4>
        </article>
        </Link>
    )
}

export default Card