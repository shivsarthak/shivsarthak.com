// a simple function which returns a bottom bar with links to my socials

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function BottomBar() {
    return (
        <div className="flex flex-row justify-center items-center w-full h-16 text-neutral-500 text-xs">
            <p>2023 Created by Shiv Sarthak Sabhlok </p>
        </div>
    );
}