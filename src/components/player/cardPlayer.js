
const CardPlayer = (props) => {

    
    return(
       <>
          <h2>Buts  {props.goals ? props.goals : "0"}</h2>
          <h4>Age {props.age ? props.age : 'Indéfini'}</h4>
          <h4>Temps de Jeu {props.minutes ? props.minutes : "0"} minutes</h4>
         
          
         
        </>
        
    )
}

export default CardPlayer