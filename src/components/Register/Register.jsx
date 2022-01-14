import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, registerWithEmailPassword } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";

const Register = () => {
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);

    const submitHandler = (e) => {
        e.preventDefault()
        registerWithEmailPassword(name, email, password)
    }

    useEffect(() => {
        if (loading) {
            return
        }

        if (user) {
            navigate("/");
        }

    }, [user, loading])

    return (
        <div className="Register vh-100 w-100">
            <form onSubmit={submitHandler} className="m-5">
                <div className="card mt-2 col-5" style={{margin: "50px auto"}}>
                    <div className="card-body mb-3 mt-2">
                        <input
                            type="text"
                            placeholder="name"
                            className="form-control mb-2"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="email"
                            className="form-control mb-2"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="form-control mb-2"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                            <Button variant="success float-end">Register</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;