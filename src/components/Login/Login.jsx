import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {auth, loginWithEmailPassword} from "../../services/authServices";
import {Button} from "react-bootstrap";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return
        }
        if (user) {
            navigate("/")
        }

    }, [loading, user])

    const submitHandler = (e) => {
        e.preventDefault();
        loginWithEmailPassword(email, password);
    }


    return (
        <div className="Login vh-100 w-100">
            <form onSubmit={submitHandler} className="m-5">
                <div className="card mt-2 col-5" style={{margin: "50px auto"}}>
                    <div className="card-body mb-3 mt-2">
                        <input
                            type="email"
                            placeholder="email"
                            className="form-control mb-2"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="form-control mb-2"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                        <Button variant="success float-end">Login</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;