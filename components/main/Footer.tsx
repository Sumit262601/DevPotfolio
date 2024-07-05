import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
    return (
        <div className="w-full h-full text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full z-[40] flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <p className="flex flex-row items-center my-[15px] ">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">
                                <a href="https://www.linkedin.com/in/sumit-kumar-bb4381250/" className="cursor-pointer">
                                    Linkedin
                                </a>
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] ">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">
                                <a href="https://github.com/Sumit262601" className="cursor-pointer">
                                    Github
                                </a>
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] ">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">
                                <a href="" className="cursor-pointer">Discord</a>
                            </span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] ">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">
                                <a href="https://instagram.com/your-instagram-username" className="cursor-pointer">
                                    Instagram
                                </a>
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] ">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">
                                <a href="https://www.linkedin.com" className="cursor-pointer">
                                    Linkedin
                                </a>
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] ">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Sumit Dev 2024 ❤️ All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
