import { Typography } from "@material-tailwind/react";

import FilledLogo from "../Assets/Logo/pixelcut-export.png";
import TransparentLogo from "../Assets/Logo/pixelcut-export.png";

const Logo = ({ variant = "default", filled = true ,color}) => {
    return (
        <a href="/" className="flex items-center gap-1 select-all">
            {(variant === "default" || variant === "icon") && (
                <img
                    src={filled ? FilledLogo : TransparentLogo}
                    className="w-[2.5rem] object-contain bg-white select-none"
                    alt="Website's logo"
                    style={{borderRadius:"50%"}}
                />
            )}
            {(variant === "default" || variant === "text") && (
                <Typography variant="h6" className={`font-semibold ${(color)?color:"text-[#323226]"} select-none`}>
                    The Cowas jee Admin Portal
                </Typography>
            )}
        </a>
    );
};

export default Logo;
