import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NabVar = () => {
    return (
        <Navbar className='container shadow-lg p-3 mb-5 bg-white rounded' bg="light" expand="lg">
        <Container>
        <Link to='/' exact>
          <Navbar.Brand href="#home">Filter By</Navbar.Brand>
        </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Groups" id="basic-nav-dropdown">
              <Link to='/' exact>
              <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to='/categoria/Group A' exact>
              <NavDropdown.Item href="#action/3.2">Group A</NavDropdown.Item>
              </Link>
                <Link to='/categoria/Group B' exact>
                <NavDropdown.Item href="#action/3.3">Group B</NavDropdown.Item>
                </Link>   
                <Link to='/categoria/Group C' exact></Link>     
                <NavDropdown.Item href="#action/3.4">Group C</NavDropdown.Item>
                <Link to='/categoria/Group D' exact></Link>     
                <NavDropdown.Item href="#action/3.4">Group D</NavDropdown.Item>
                <Link to='/categoria/Group F' exact></Link>     
                <NavDropdown.Item href="#action/3.4">Group F</NavDropdown.Item>
                <Link to='/categoria/Group G' exact></Link>     
                <NavDropdown.Item href="#action/3.4">Group G</NavDropdown.Item>
                <Link to='/categoria/Group H' exact></Link>     
                <NavDropdown.Item href="#action/3.4">Group H</NavDropdown.Item>
                <Link to='/categoria/Group K' exact></Link>     
                <NavDropdown.Item href="#action/3.4">Group K</NavDropdown.Item>
                <Link to='/categoria/Group L' exact></Link>     
                <NavDropdown.Item href="#action/3.4">Group L</NavDropdown.Item>
                <Link to='/categoria/Group P' exact></Link>     
                <NavDropdown.Item href="#action/3.4">Group P</NavDropdown.Item>
                <Link to='/categoria/Group S' exact></Link>     
                <NavDropdown.Item href="#action/3.4">Group S</NavDropdown.Item>
                <Link to='/categoria/Group V' exact></Link>     
                <NavDropdown.Item href="#action/3.4">Group V</NavDropdown.Item>
                <Link to='/categoria/Group W' exact></Link>     
                <NavDropdown.Item href="#action/3.4">Group W</NavDropdown.Item>
                <Link to='/categoria/Group Z' exact></Link>     
                <NavDropdown.Item href="#action/3.4">Group Z</NavDropdown.Item>
              </NavDropdown>
              
              <li className="list-group-item border-0"><input type="checkbox"/> Manual transmission</li>
              <li className="list-group-item border-0"><input type="checkbox"/> Automatic transmission</li>
              <li className="list-group-item border-0"><input type="checkbox"/> 5 seats</li>
              <li className="list-group-item border-0"><input type="checkbox"/> 7 seats or more</li>
              <li className="list-group-item border-0"><input type="checkbox"/> Convertibles</li>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
)

}
export default NabVar;
