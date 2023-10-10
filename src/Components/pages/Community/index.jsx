import React from "react";
import { Link } from "react-router-dom";

const Community = () => {
    return (
        <section className="bg-2">
            {/* <div className="bg-overlay"/> */}
            <div className="all-center w-full flex-col pt-16 pb-32">
                <h2 className="text-center text-[#EBE821] text-title py-10">Community</h2>
               <div className="sm:w-[50%] w-full px-2 sm:px-0">
                    <p className="text-center text-[#EBE821] py-4">
                        Our community is a fusion of PEPE and Shiba Coin enthusiasts, 
                        united by our shared enthusiasm for meme-inspired cryptocurrencies. 
                        We’re committed to fostering a positive and supportive environment for all members.
                    </p>
                    <p className="text-center text-[#EBE821] py-4">
                        Join discussions, share memes, and connect with like-minded
                        individuals who share your enthusiasm for meme coins.</p>
                    <p className="text-center text-[#EBE821] py-4"><strong>$SHEPE</strong> Whether you’re hodling, trading, or just here for the memes, you’re welcome here.</p>
               </div>
            </div>
        </section>
    );
}

export default Community;
