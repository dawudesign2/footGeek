import { Link } from "react-router-dom"


const Card = (props) => {

    
    return(
       <div className="seb_card">
       <Link className="seb_link" to={`/articles/${props.publishedAt}`}>
        <article className="seb_article" id={props.id}>
        <h1 className="seb_article__title">{props.title}</h1>
            <img src={props.urlToImage} alt={props.title}/>
          <h4 className="seb_article__desc">{props.description}</h4>
          <button className="seb_article__btn">Voir</button>
        </article>
       
        </Link>
        </div>
    )
}

export default Card