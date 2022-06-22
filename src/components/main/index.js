import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/home';
import Scores from '../../pages/scores';
import Stats from '../../pages/stats';
import Classement from '../../pages/classement';
<<<<<<< HEAD
<<<<<<< HEAD
import News from '../../pages/news';
=======
import Transfert from '../../pages/transfert';
>>>>>>> 0e47ec3c336740aad71e8f29637f242e1436544d
=======
import Transfert from '../../pages/transfert';
>>>>>>> 0e47ec3c336740aad71e8f29637f242e1436544d
import Contact from '../../pages/contact';
import SignIn from '../../pages/signin';
import SignUp from '../../pages/signup';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/classement" element={<Classement />} />
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path="/news" element={<News />} />
=======
            <Route path="/transfert" element={<Transfert />} />
>>>>>>> 0e47ec3c336740aad71e8f29637f242e1436544d
=======
            <Route path="/transfert" element={<Transfert />} />
>>>>>>> 0e47ec3c336740aad71e8f29637f242e1436544d
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

export default Main;