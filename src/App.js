import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Body from "./components/Body/Body";
import {Container} from "react-bootstrap";
const App  = ()=>{
    return(
        <Container fluid className='p-0'>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Body />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </Router>
        </Container>
    )

}
export default App;
