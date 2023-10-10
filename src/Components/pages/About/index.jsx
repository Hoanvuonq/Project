import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="bg-2">
            {/* <div className="bg-overlay"/> */}
            <div className="all-center w-full flex-col pt-16 pb-32">
                <h2 className="text-center text-[#EBE821] text-title py-10">About $SHEPE</h2>
               <div className="sm:w-[50%] w-full px-2 sm:px-0">
                    <p className="text-center text-[#EBE821] py-4">Shiba Inu and Pepe Frog, two legendary meme characters, are stepping into the ring for 
                        an electrifying Street Fighter-style showdown in the world of cryptocurrencies! 
                    </p>
                    <p className="text-center text-[#EBE821] py-4">Bringing you the best of both worlds: the cuteness of Shiba Inu and the mischievousness of Pepe Frog, duking it out in the ultimate clash.</p>
                    <p className="text-center text-[#EBE821] py-4"><strong>$SHEPE</strong> is not just a meme; it’s a movement!</p>
               </div>
               <button className="p-4 rounded-xl bg-[#EBE821] font-bold">BUY $SHEPE</button>
            </div>
        </section>
    );
}

export default About;
