import {Button, Form, InputGroup} from "react-bootstrap";
import {BiSearchAlt} from "react-icons/bi";
import {useState} from "react";
import Forecasts from "../Forecasts/Forecasts";
const SearchCity = () =>{
    const [searchCity, setSearchCity] = useState("");
    const submitWorkHandler = (e) =>{
        e.preventDefault()
        setSearchCity("")
        Forecasts(searchCity)
    }

    return(
         <>
         <Form onSubmit={submitWorkHandler}>
            <InputGroup>
                <Form.Group>
                    <Form.Control
                        type="search"
                        className="form-control"
                        placeholder="Search City"
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" className="btn btn-success"><BiSearchAlt size="20px" /></Button>
            </InputGroup>
         </Form>
         </>
    );
}
export default SearchCity