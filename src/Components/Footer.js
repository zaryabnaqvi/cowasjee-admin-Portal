import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const Tag = ({ children }) => {
        return (
            <span className="px-3 py-1 rounded-lg bg-[#2F2F2F] text-xs text-gray-400 uppercase select-none">
                {children}
            </span>
        );
    };

    const Section = ({ label, content }) => {
        return (
            <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-xs uppercase tracking-wide">{label}</h2>
                {content}
            </div>
        );
    };

    const SEOTags = (
        <div className="flex items-center gap-4 font-semibold">
            <Tag>Education</Tag>
            <Tag>Administration</Tag>
            <Tag>Managment</Tag>
        </div>
    );

    const socialMediaButtons = (
        <div className="flex items-center gap-6 font-semibold">
            <a href="https://www.facebook.com/tcs.ned" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.youtube.com/@TheCowasjeeSchool" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.tiktok.com/@the.cowasjee.school" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTiktok} />
            </a>
        </div>
    );

    const legalLinks = (
        <nav className="flex gap-4 lg:gap-8">
            <a href="." className="hover:text-gray-500 active:text-gray-300 hover:underline">
                Terms of Service
            </a>
            <a href="." className="hover:text-gray-500 active:text-gray-300 hover:underline">
                Privacy Policy
            </a>
            <a href="." className="hover:text-gray-500 active:text-gray-300 hover:underline">
                Cookie Policy
            </a>
        </nav>
    );

    return (
        <footer className="text-white">
            <div className="px-8 lg:px-48 py-12 bg-gray-900">
                <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-semibold">Cowasjee Admin Portal</h2>
                        <div className="flex flex-col gap-2 text-gray-400">
                            <p className="w-full lg:w-2/5 text-xs text-justify">
                            The Cowasjee School, formerly known as NED School English Medium, opened under the managegement of NED University in 2009.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <Section label="Tags" content={SEOTags} />
                        <Section label="Follow Us" content={socialMediaButtons} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between gap-4 px-8 lg:px-48 py-8 bg-[#101010] font-medium text-xs text-gray-600">
                <div>
                    <p>
                        Copyright <FontAwesomeIcon icon={faCopyright} /> 2024 &middot; All rights reserved | Made with{" "}
                        <FontAwesomeIcon icon={faHeart} /> by <span className="font-bold">Cowasjee School</span>.
                    </p>
                </div>
                {/* <div>{legalLinks}</div> */}
            </div>
        </footer>
    );
};

export default Footer;
