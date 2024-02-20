import { useEffect, useState } from "react";
import { Navbar, Button, Collapse } from "@material-tailwind/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "./Logo";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            setScrolled(window.scrollY !== 0);
        });
    }, [scrolled]);

    const [openNav, setOpenNav] = useState(false);
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1024) {
                setOpenNav(false);
            }
        });
    }, []);

    const MenuItem = ({ children, href }) => {
        return (
            <a href={href} className="flex items-center">
                <Button
                    variant="text"
                    size="sm"
                    ripple={false}
                    className="w-full lg:w-fit font-medium text-[0.85rem] text-start text-gray-800 capitalize"
                >
                    {children}
                </Button>
            </a>
        );
    };

    const navList = (
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
            <MenuItem>About</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
        </div>
    );

    const accessControlButtons = (
        <div className="flex items-center gap-2">
            <a href="/accounts/sign-in" className="min-w-24 flex-1">
                <Button variant="text" size="sm" fullWidth>
                    Sign In
                </Button>
            </a>
            <a href="/accounts/sign-up" className="min-w-24 flex-1">
                <Button variant="gradient" size="sm" fullWidth>
                    Sign Up
                </Button>
            </a>
        </div>
    );

    const toggleMenu = (
        <FontAwesomeIcon
            icon={openNav ? faClose : faBars}
            onClick={() => setOpenNav(!openNav)}
            className="w-5 h-5 p-2 rounded-lg text-inherit hover:bg-gray-100 active:bg-gray-200 focus:bg-transparent"
        />
    );

    return (
        <Navbar className="sticky top-0 px-4 py-2 border-b border-gray-300 text-gray-900" shadow={scrolled} fullWidth>
            <div className="flex items-center justify-between">
                <div>
                    <Logo />
                </div>
                <div className="hidden lg:block">{navList}</div>
                <div className="hidden lg:block">{accessControlButtons}</div>
                <div className="lg:hidden">{toggleMenu}</div>
            </div>
            <Collapse open={openNav}>
                <div className="flex flex-col gap-4">
                    {navList}
                    <hr />
                    {accessControlButtons}
                </div>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
