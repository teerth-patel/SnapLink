import React ,{useState} from 'react'
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/signin', {
                username,
                password
            });
            console.log('Login successful:', response.data);
            // Handle successful login (e.g., save token, redirect)
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
        }

        return (
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="images/undraw_remotely_2j6y.svg" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-6 contents">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="mb-4">
                                        <h3>Sign In</h3>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group first">
                                            <label htmlFor="username">Username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group last mb-4">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="d-flex mb-5 align-items-center">
                                            <label className="control control--checkbox mb-0">
                                                <span className="caption">Remember me</span>
                                                <input type="checkbox" defaultChecked />
                                                <div className="control__indicator"></div>
                                            </label>
                                            <span className="ml-auto">
                                                <a href="#" className="forgot-pass">Forgot Password</a>
                                            </span>
                                        </div>
                                        <input type="submit" value="Log In" className="btn btn-block btn-primary" />
                                        <span className="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>
                                        <div className="social-login">
                                            <a href="#" className="facebook"><span className="icon-facebook mr-3"></span></a>
                                            <a href="#" className="twitter"><span className="icon-twitter mr-3"></span></a>
                                            <a href="#" className="google"><span className="icon-google mr-3"></span></a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

    export default Login
