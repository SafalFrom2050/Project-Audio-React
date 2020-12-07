import "./Nav.css";
import {Link} from 'react-router-dom';

function Nav(props) {
  return (
        <nav>
            <ul className="navBar-nav">
                <Link className="li" to="/">
                  <li>Share Room</li>
                </Link>
                <Link className='li' to='/mycollection'>
                  <li>My Collection</li>
                </Link>
                <Link className='li'>
                  <li>Dark Theme</li>
                </Link>
            </ul>

        </nav>
  )
}
export default Nav;
