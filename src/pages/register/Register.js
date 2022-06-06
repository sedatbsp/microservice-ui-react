import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import User from '../../models/User';
import AuthenticationService from '../../services/AuthenticationService';
import './Register.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Register = () => {

    const [user, setUser] = useState(new User('', '', ''));
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const currentUser = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser?.id) {
            navigate('/profile');
        }
    }, [])

    // onChange = (event=> handleChange(event))
    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser((prevState => {
            // prevState ({user: abc, pass:abc}) + newValue ({user:abcd}) => ({user:abcd, pass: abc})
            return {
                ...prevState,
                [name]: value
            };
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (!user.username || !user.password || !user.name) {
            return;
        }
        setLoading(true);

        AuthenticationService.register(user).then(() => {
            navigate('/login');
        }).catch((error) => {
            console.log(error);
            if (error?.response?.status === 409) {
                setErrorMessage('username or password is not valid');
            } else {
                setErrorMessage('Unexpected error occurred.')
            }
            setLoading(false);
        });

    };

    return (
        <div className="container mt-5">
            <div className="card ms-auto me-auto p-3 shadow-lg custom-card">
                <FontAwesomeIcon icon={faUserCircle} className="ms-auto me-auto user-icon" />
                {errorMessage &&
                    <div className="alert alert-danger mt-3">
                        {errorMessage}
                    </div>
                }

                <form
                    onSubmit={(e) => handleSubmit(e)}
                    noValidate
                    className={submitted ? 'was-validated' : ''}
                >
                    <div className="form-group">
                        <label htmlFor="name">Full name:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="name..."
                            value={user.name}
                            onChange={(e) => handleChange(e)}
                            required />
                        <div className="invalid-feedback">
                            Full name is required
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="username..."
                            value={user.username}
                            onChange={(e) => handleChange(e)}
                            required />
                        <div className="invalid-feedback">
                            Username is required
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="password..."
                            value={user.password}
                            onChange={(e) => handleChange(e)}
                            required />
                        <div className="invalid-feedback">
                            Password is required
                        </div>
                    </div>

                    <button
                        className="btn btn-dark w-100 mt-3"
                        disabled={loading}>
                        Sign Up
                    </button>

                </form>

                <p className="text-center mt-1">
                    Do you have an account?<br></br>
                    <Link to="/login" className="btn btn-link">Sign in</Link>
                </p>

            </div>
        </div>
    );

}

export { Register }