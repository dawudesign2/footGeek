import { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import CardPlayer from '../../components/player/cardPlayer';

const Player = () => {
  const [data, setData] = useState([]);
  const [player, setPlayer] = useState();

  const handleChange = (e) => {
    setPlayer(e.target.value);
  }


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://www.goalserve.com/getfeed/ac568400f72e4143042808da5f2c4104/soccerleague/1221?json=true'
      );


      setData(result.data.league.team);




    };
    fetchData();
  }, [])
  
  
  return (
    <Fragment>

      <label>Mon Joueur</label>
      <select value={player} onChange={handleChange}>
        {/*<img src={`data:image/png;base64,`+data.image}/>*/}
        {data.map(item => {
          return (
            <>
            <option>{item.name}</option>
              {
                item.squad.player
                  .map(player => (
                    <option>{player.name}</option>
                  ))}
                  
            </>
          )
        })
        }

      </select>
      {
        data.map(item => (item.squad.player
          .filter(play => play.name === player)
          .map(joueur => {
            return (
              <>
              <CardPlayer name={joueur.name} age={joueur.age} position={joueur.position} goals={joueur.goals} minutes={joueur.minutes} rating={joueur.rating} id={joueur.id}/>
                
                {console.log(joueur)}
              </>
            )
          })))

      }



    </Fragment>
  )
}


export default Player;