import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="navbar">
             <h1>The Note App</h1>
             <div className="links">
                 <Link to="/">Home</Link>
                <Link to="/Create">New Note</Link>
                
             </div>
        </nav>
     );
}
 
export default Navbar;