import { Button, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import Surveillance from "../Assets/Illustrations/SurveillanceUpscaled.png";

const HomePage = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col">
                <NavBar />
                <div className="flex-grow flex flex-col flex-col-reverse lg:flex-row justify-center">
                    <div className="flex-1 flex flex-col gap-8 lg:gap-10 px-8 lg:px-12 py-16 lg:py-36 text-justify lg:text-left transition-all duration-400">
                        <div className="flex flex-col gap-10 lg:gap-12">
                            <Typography
                                variant="h1"
                                className="text-center lg:text-left text-3xl lg:text-4xl 2xl:text-6xl text-[#323229] transition-all duration-400"
                            >
                                Track <span className="text-lime-900">Energy</span>, Save{" "}
                                <span className="text-[#8f5a0a]">Money</span>
                            </Typography>
                            <Typography>
                                Experience the convenience of our surveillance system tailored specifically for home
                                electric meters. Monitor your energy usage in real-time, empowering you to track your
                                bills and optimize your consumption to save money. With advanced features designed to
                                enhance efficiency and reduce costs, take control of your energy usage and enjoy
                                significant savings over time.
                            </Typography>
                        </div>
                        <div className="flex items-center justify-center gap-12 lg:gap-20 lg:justify-start px-16 lg:px-0 transition-all duration-400">
                            <div className="flex gap-2 items-center">
                                <FontAwesomeIcon icon={faCheckDouble} color="green" />
                                <Typography>Reliable</Typography>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FontAwesomeIcon icon={faCheckDouble} color="green" />
                                <Typography>Accurate</Typography>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FontAwesomeIcon icon={faCheckDouble} color="green" />
                                <Typography>Secure</Typography>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <Button variant="gradient" color="amber">
                                Order Now <FontAwesomeIcon icon={faAngleDoubleRight} className="pl-2" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img src={Surveillance} alt="" className="w-full max-w-3xl p-8 md:p-4 lg:p-0 transition-all duration-400" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
