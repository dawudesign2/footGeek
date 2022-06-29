import {Link} from "react-router-dom";

const Card = ({id,title, description, urlToImage}) => {
    

    return(
        <>
           <article className="card">
               <img src={urlToImage} alt={title}/>
               <div className="card-content">
                   <h3>{title}</h3>
                   <p>{description}</p>
               </div>
    <Link to={`/articles/${id}`}>Plus</Link>
           </article> 
        </>
    )
}

export default Card