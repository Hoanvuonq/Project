import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/logo.png"

const Sidebar = () => {
    return (
        <div className="flex justify-between px-20 py-5 items-center">
            <img src={Logo} alt="Logo" className="w-[100px] h-[50px]" />
            <div className="flex gap-5">
                <p className="text-white font-bold">About</p>
                <p className="text-white font-bold">Tokenomics</p>
                <p className="text-white font-bold">Community</p>
            </div>
        </div>
    );
}

export default Sidebar;
