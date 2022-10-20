import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../context/UserContecxt';

const Signup = () => {
    const [confirm, setConfirm] = useState(false);

    const { createUser } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();
        setConfirm(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(email, password, confirmPassword);

        if (password !== confirmPassword) {
            setConfirm(true);
        }
        else {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    form.reset();
                    console.log(user);
                })
                .catch(error => console.log(error));
        }

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Please Register to keep up to date!!!</p>
                    </div>
                    <form onSubmit={handleSignIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmPassword' required placeholder="confirm password" className="input input-bordered" />
                            </div>
                            {
                                confirm ? <p className='text-red-600'>Password do not Match!!</p> : undefined
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">sign up</button>
                            </div>
                            <label className="label text-center">
                                <p>Already have an account? <Link to='/login' className="link link-hover">Login</Link></p>
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

export default Signup;