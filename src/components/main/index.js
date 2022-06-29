import { Routes, Route, useMatch } from 'react-router-dom';

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
 
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/classement" element={<Classement />} />
            <Route path="/news" element={<News />} />
            <Route path="/articles/:id" element={<Articles match={match} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

export default Main;