import { Routes, Route, useMatch } from 'react-router-dom';
import {useEffect, useState} from 'react';
import infoContext from '../../context/infoContext';


import Home from '../../pages/home';
import Scores from '../../pages/scores';
import Stats from '../../pages/stats';
import Classement from '../../pages/classement';
import News from '../../pages/news';
import Articles from '../../pages/articles';
import Contact from '../../pages/contact';
import SignIn from '../../pages/signin';
import SignUp from '../../pages/signup';

const Main = () => {
    let match = useMatch({
        path: '/articles/:id/',
        exact: true,
      })
      const [info, setInfo] = useState([])

      useEffect(() => {
          const url = "https://newsapi.org/v2/everything?domains=sofoot.com&apiKey=9754d0ca672246ddbb47e77f01f331ce";
          fetch(url)
              .then((res) => res.json())
              .then((data) => setInfo(data.articles))
      }, [])
 
    return (
        <infoContext.Provider value={info} >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/classement" element={<Classement />} />\quests
            <Route path="/news" element={<News />} />
            <Route path="/articles/:id" element={<Articles match={match} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
        </infoContext.Provider>
    )
}

export default Main;