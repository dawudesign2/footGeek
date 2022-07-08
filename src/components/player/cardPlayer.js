
const CardPlayer = (props) => {

    
    return(
       <>
          <h1>{props.name}</h1>
          <h2>Age {props.age} ans</h2>
          <h4>Position {props.position}</h4>
          <h4>Buts {props.goals}</h4>
          <h4>Temps de Jeu {props.minutes} minutes</h4>
          <h4>Matchs Joués {props.appearences}</h4>
          <h4>Notes {props.rating}</h4>
          {props.id}
        </>
        
    )
}

export default CardPlayer