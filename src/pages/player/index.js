import { useState, useEffect, Fragment } from 'react'
import axios from 'axios';

const Player = () => {
  const [bla, setBla] = useState([]);
  //const [player, setPlayer] = useState();

  /*const handleChange = (e) => {
    setPlayer(e.target.value);
  }*/


  useEffect(() => {
    //const country = 1221;
    /*const fetchData = async () => {
      const result = await axios(
        `http://www.goalserve.com/getfeed/ac568400f72e4143042808da5f2c4104/soccerleague/${country}?json=true`
      );
      setData(result.data.league.team);
    };
    fetchData(); */

    /*
    const TeamData  =  async () => {
      const res = await axios(
        `https://www.goalserve.com/getfeed/ac568400f72e4143042808da5f2c4104/soccerstats/team/${eq}?json=true`
      )
     setData(res.data.teams.team)

    }
    TeamData(); */
     axios.get('https://www.goalserve.com/getfeed/ac568400f72e4143042808da5f2c4104/soccerstats/team/10061?json=true')
     .then(res => setBla(res.data.teams.team));
  }, [])
  
  
  return (
      <Fragment>
       {console.log(bla)}
       {bla.coach.name}
      </Fragment>
      
  )
}


export default Player;