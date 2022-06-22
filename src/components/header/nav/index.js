import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className='nav'>
            <Link to='/'>FootGeek</Link>
            <Link to='/scores'>Scores</Link>
            <Link to='/stats'>Stats</Link>
            <Link to='/classement'>Classement</Link>
            <Link to='/transfert'>Transfert</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/signin'>Sign In</Link>
            <Link to='/signup'>Sign Up</Link>
        </nav>
    );
}

export default Nav;
