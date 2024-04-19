import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";


import Logo from "../Components/Logo";
import cover from '../Assets/Welcome to Cowas Jee Admin Portal.png'
import "../Styles/imageUpload.css"
import { TextLink } from "../Components/Typography";


const SignInPage = () => {
    const navigate = useNavigate(); // Initialize navigate hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Perform login request
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            const data = await response.json();
            const { token } = data; // Assuming the token is returned from the backend

            // Save the token to localStorage
            localStorage.setItem('token', token);

            // Navigate to another route (e.g., '/dashboard')
            navigate('/dashboard');

        } catch (error) {
            console.error('Login failed:', error.message);
            // Handle login failure (e.g., display an error message)
        }
    };

    return (
        <div className="min-h-screen text-gray-900 flex justify-center">
            <div style={{ boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px", borderRadius: '20px' }} className="m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1 bg-gray-900 overflow-hidden">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 bg-gray-900 flex justify-center items-center">
                    <div >
                        <div className="flex justify-center items-center">
                            <Logo color="text-white" />
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-2xl text-white font-extrabold">
                                Login to Cowas Jee Admin
                            </h1>
                            <form className="w-full flex-1 mt-8" onSubmit={handleSubmit}>
                                <div className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-red-900 focus:bg-white"
                                        type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-red-900 focus:bg-white mt-5"
                                        type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                                    <button
                                        className="mt-5 tracking-wide font-semibold bg-[#932a27] text-gray-100 w-full py-4 rounded-lg hover:bg-[#932a27] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                        type="submit">
                                        <FontAwesomeIcon icon={faLock} />
                                        <span className="ml-3">
                                            Sign in
                                        </span>
                                    </button>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        I agree to abide by templatana's
                                        <a href="#" className="border-b border-gray-500 border-dotted">
                                            Terms of Service
                                        </a>
                                        and its
                                        <a href="#" className="border-b border-gray-500 border-dotted">
                                            Privacy Policy
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div  className="flex-1 bg-white bg-contain bg-clip-border bg-no-repeat text-center hidden lg:flex bg-sign  ">
                    <img className="m-0 object-fill " src={cover} />
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
