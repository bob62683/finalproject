import { Link } from 'react-router-dom';
import '../App.css'

function Nav() {
    return (
      <ul id='main-nav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/favorites'>Favorites</Link></li>
      </ul>
    )
  }

export default Nav;