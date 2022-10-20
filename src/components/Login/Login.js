import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../context/UserContecxt';

const Login = () => {

    const [success, setSuccess] = useState(false);
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSingIn = (event) => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                setSuccess(true);
                form.reset();
                navigate(from, {replace:true})
                console.log(user);
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login for order</p>
                    </div>
                    <form onSubmit={handleSingIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            </div>

                            {
                                success ? <p className='text-green-500'>Login Successful!</p> : undefined
                            }

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label text-center">
                                <p>New to this website? <Link to='/signup' className="link link-hover">Create New Account</Link></p>
                            </label>
                            <p className='text-center'>Or</p>
                            <button className='btn'><FcGoogle /><span className='ml-2'>Continue With Google</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;