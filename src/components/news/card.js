import { Link } from "react-router-dom"


const Card = ({id, title, urlToImage, description, publishedAt}) => {

    
    return(
       <div className="seb_card">
       <Link className="seb_link" to={`/articles/${publishedAt}`}>
        <article className="seb_article" id={id}>
        <h1 className="seb_article__title">{title}</h1>
            <img src={urlToImage} alt={title}/>
          <h4 className="seb_article__desc">{description}</h4>
          <button className="seb_article__btn">Voir</button>
        </article>
       
        </Link>
        </div>
    )
}

export default Card