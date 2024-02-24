import { useState, useEffect } from 'react';
import { Card, Typography, Button, Input } from "@material-tailwind/react";
import Logo from "../Components/Logo";

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        ValidateForm();
    }, [name, email, password, confirmPassword]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const ValidateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[A-Za-z]+$/;

        let isValid = true;

        if (!nameRegex.test(name) && name?.length) {
            setNameError('Name can only have English alphabets');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!emailRegex.test(email) && email?.length) {
            setEmailError('Enter a valid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (confirmPassword !== password && confirmPassword?.length) {
            setConfirmPasswordError('Passwords do not match');
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        setIsFormValid(isValid);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-16 py-8">
            <Card
                shadow={false}
                className="w-full md:w-fit max-w-md flex flex-col items-center gap-6 px-8 py-12 md:border md:border-gray-300"
            >
                <div>
                    <Logo />
                </div>
                <div className="flex flex-col gap-4">
                    <Typography className="font-light text-center text-gray-800 mb-2">Sign Up</Typography>
                </div>
                <form className="w-full md:w-96 flex flex-col gap-6 transition-all duration-400">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <Typography className="text-xs font-semibold">Name</Typography>
                            <Input
                                size="md"
                                placeholder="Name"
                                className="!border-t-blue-gray-200 focus:!border-t-amber-500"
                                color="amber"
                                value={name}
                                onChange={handleNameChange}
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <Typography className="text-xs font-semibold">Email</Typography>
                            <Input
                                size="md"
                                placeholder="abc.123@mail.com"
                                className="!border-t-blue-gray-200 focus:!border-t-amber-500"
                                color="amber"
                                value={email}
                                onChange={handleEmailChange}
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <Typography className="text-xs font-semibold">Password</Typography>
                            <div className="relative">
                                <Input
                                    placeholder="********"
                                    className=" !border-t-blue-gray-200 focus:!border-t-amber-500 pr-10"
                                    color="amber"
                                    type={showPassword ? "text" : "password"} // Change type based on visibility
                                    value={password}
                                    onChange={handlePasswordChange}
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2"
                                    onClick={handleTogglePasswordVisibility}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Typography className="text-xs font-semibold">Confirm Password</Typography>
                            <div className="relative">
                                <Input
                                    placeholder="********"
                                    className=" !border-t-blue-gray-200 focus:!border-t-amber-500"
                                    color="amber"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2"
                                    onClick={handleToggleConfirmPasswordVisibility}
                                >
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            {confirmPasswordError && <p className="text-red-500 text-xs">{confirmPasswordError}</p>}
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 text-justify">
                        <p className="text-xs text-gray-700">
                            By signing in to the Electric Surveillance System, you agree to comply with all applicable laws
                            and regulations regarding the use of this system.
                            <br></br>
                            <br></br>
                            You also acknowledge that your activities within the system may be monitored and recorded for
                            security purposes.
                        </p>
                    </div>
                    <Button color="amber" type="submit" fullWidth disabled={!isFormValid}>
                        Sign Up
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default SignUpPage;
