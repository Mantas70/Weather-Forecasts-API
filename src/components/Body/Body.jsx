import "./Body.scss"
import {Card, Container} from "react-bootstrap";
import Forecasts from  "../Forecasts/Forecasts";
const Body = () =>{
    return(
     <>
       <Container fluid className="p-0">
           <Card className="w-100 vh-100">
               <Card.Body className="vh-100">
                   <Forecasts />
               </Card.Body>
           </Card>
       </Container>
     </>
    )
}
export default Body;