import "./Header.scss"
import {Button, Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import SearchCity from "../Search/SearchCity";
const Header = (props) =>{
    return(
        <>
            <Navbar className="nav">
                <Container>
                    <Navbar.Brand href="/">
                        <h4>Weather Forecast</h4>
                    </Navbar.Brand>
                    <Navbar.Collapse className='justify-content-center'>
                        <h2>{props.city}</h2>
                    </Navbar.Collapse>
                    <Button variant="success" className="register" href="/register">Register</Button>
                    <Button variant="success" className="login" href="/login">Login</Button>
                <SearchCity />
                </Container>
            </Navbar>
        </>
    )
}
export default Header;