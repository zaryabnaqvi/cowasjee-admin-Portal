import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { Typography } from "@material-tailwind/react";

import { TextLink } from "../../Components/Typography";

const Error404Page = () => {
    const TIMEOUT = 300;

    const [redirect, setRedirect] = useState(false);
    const [countdown, setCountdown] = useState(TIMEOUT);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        if (countdown === 0) {
            clearInterval(timer);
            setRedirect(true);
        }
        return () => clearInterval(timer);
    }, [countdown]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-2 text-center">
            {redirect && <Navigate to="/" />}
            <div className="flex-grow flex flex-col justify-center gap-3 lg:gap-4 text-gray-700 transition-all duration-400">
                <Typography className="font-semibold text-8xl lg:text-9xl text-gray-800 transition-all duration-400">
                    404
                </Typography>
                <Typography className="text-sm lg:text-base">
                    The requested page does not exist on the website server.
                </Typography>
                <Typography className="text-xs sm:text-sm">
                    Redirecting to <TextLink href="/"> home page </TextLink> in{" "}
                    <span className="font-semibold">{countdown}</span> seconds.
                </Typography>
            </div>
        </div>
    );
};

export default Error404Page;
