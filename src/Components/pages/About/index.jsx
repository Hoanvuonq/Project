import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section id="about" className="bg-2">
            <div className="bg-overlay" />
            <div className="all-center w-full h-full flex-col relative z-20">
                <h2 className="text-center text-title sm:text-[120px] !text-6xl py-10">About $PEPE</h2>
                <div className="sm:w-[50%] w-full px-2 sm:px-0">
                    <p className="text-center text-content py-4">It features a collection of rare, tradable Pepe characters inspired by various anime themes. Each digital Pepe is a one-of-a-kind collectible, creating a vibrant and decentralized meme culture within the blockchain community.</p>
                </div>
                <button className="p-4 rounded-xl bg-[#EBE821] font-bold mt-10">BUY $PEPE</button>
            </div>
        </section>
    );
}

export default About;
