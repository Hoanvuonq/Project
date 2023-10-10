import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section id="about" className="bg-2">
            <div className="bg-overlay"/>
            <div className="all-center w-full h-full flex-col relative z-20">
                <h2 className="text-center text-title sm:text-[120px] !text-6xl py-10">About $PEPE</h2>
               <div className="sm:w-[50%] w-full px-2 sm:px-0">
                    <p className="text-center text-content py-4">Shiba Inu and Pepe Frog, two legendary meme characters, are stepping into the ring for 
                        an electrifying Street Fighter-style showdown in the world of cryptocurrencies! 
                    </p>
                    <p className="text-center text-content py-4">Bringing you the best of both worlds: the cuteness of Shiba Inu and the mischievousness of Pepe Frog, duking it out in the ultimate clash.</p>
                    <p className="text-center text-content py-4"><strong>$PEPE</strong> is not just a meme; it’s a movement!</p>
               </div>
               <button className="p-4 rounded-xl bg-[#EBE821] font-bold mt-10">BUY $PEPE</button>
            </div>
        </section>
    );
}

export default About;
