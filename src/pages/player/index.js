import { useState, useEffect, Fragment } from 'react'
import axios from 'axios';

const Player = () => {
  const [data, setData] = useState ([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios (
        'https://jsonplaceholder.typicode.com/posts'
      );
      setData(result.data);
    };
    fetchData();
  },[])
  return (
    <Fragment> 
      <ul>
        {data.map(item =>(
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
      
   </Fragment>
  )
}


export default Player;