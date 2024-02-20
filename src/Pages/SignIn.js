import React, { useState } from "react";

import { Card, Typography, Radio, Button, Input } from "@material-tailwind/react";

import Logo from "../Components/Logo";
import { TextLink } from "../Components/Typography";

const SignInPage = () => {
    const availableRoles = [
        {
            label: "Administrator",
            value: "administrator",
            description: "Account owner that performs tasks requiring unrestricted access.",
        },
        {
            label: "Standard",
            value: "standard",
            description: "User within an account that performs daily tasks.",
        },
    ];

    const [selectedRole, setSelectedRole] = useState(availableRoles[0].value);
    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    const RoleSelector = ({ name, availableRoles }) => {
        return (
            <div className="flex flex-col gap-4">
                {availableRoles.map((role, index) => (
                    <Card
                        shadow={false}
                        className={`p-2 border-2 ${
                            selectedRole === role.value ? "border-amber-500 bg-[#fffdf5]" : "border-gray-200"
                        }`}
                        key={index}
                    >
                        <Radio
                            name={name}
                            value={role.value}
                            checked={selectedRole === role.value}
                            onChange={handleRoleChange}
                            label={
                                <>
                                    <Typography className="font-medium text-gray-800">{role.label}</Typography>
                                    <Typography variant="small" className="font-normal text-gray-700">
                                        {role.description}
                                    </Typography>
                                </>
                            }
                            color="amber"
                            containerProps={{
                                className: "-mt-4",
                            }}
                        />
                    </Card>
                ))}
            </div>
        );
    };

    const UserForm = () => {
        const LegalPrompt = () => {
            return (
                <div className="bg-gray-100 p-4 text-justify">
                    <p className="text-xs text-gray-700 mb-4">
                        By signing in to the Electric Surveillance System, you agree to comply with all applicable laws
                        and regulations regarding the use of this system.
                        <br></br>
                        <br></br>
                        You also acknowledge that your activities within the system may be monitored and recorded for
                        security purposes.
                    </p>
                </div>
            );
        };

        return (
            <form className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <Typography className="text-xs font-semibold">Email</Typography>
                        <Input
                            size="md"
                            placeholder="name@mail.com"
                            className="!border-t-blue-gray-200 focus:!border-t-amber-500"
                            color="amber"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Typography className="text-xs font-semibold">Password</Typography>
                        <Input
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-amber-500"
                            color="amber"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography className="text-right">
                            <a
                                href="."
                                className="font-medium text-xs text-amber-500 hover:text-amber-600 active:text-amber-700 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </Typography>
                    </div>
                </div>
                <LegalPrompt />
                <Button color="amber" type="submit" fullWidth>
                    Sign In
                </Button>
            </form>
        );
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
                    <Typography className="font-light text-center text-gray-800">Sign In</Typography>
                </div>
                <div className="w-full md:w-96 flex flex-col gap-6 transition-all duration-400">
                    <RoleSelector name="userRole" availableRoles={availableRoles} />
                    <UserForm />
                </div>
                <div>
                    <Typography variant="small">
                        Don't have an account? <TextLink href="/accounts/sign-up">Sign up</TextLink>
                    </Typography>
                </div>
            </Card>
        </div>
    );
};

export default SignInPage;
