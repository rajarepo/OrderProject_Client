
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

const AdminNavbar = (props) => {
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Nav
            className="h4 mb-0 p-2 pt-3 pl-4 head d-none d-lg-inline-block"
            
          >
            Request Type - <span style={{color:'#000000'}}>{props.brandText} </span>
          </Nav>
          
          
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
