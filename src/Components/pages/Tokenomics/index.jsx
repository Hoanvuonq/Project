import React from "react";
import { Link } from "react-router-dom";
import Tokenomic from '../../../Assets/item-token.png'

const Tokenomics = () => {
    return (
        <section id="tokenomics" className="bg-1">
            <div className="bg-overlay"/>
            <div className="all-center w-full flex-col h-full relative z-20">
                <img src={Tokenomic} alt="Tokenomic" width={600} height={600} className="sm:rounded-[36px] rounded-none sm:px-0 px-3" />
               <div className="w-[75%]">
                    <h2 className="text-title sm:text-[120px] !text-6xl text-center pt-10">Tokenomics</h2>
                    <div className=" sm:flex block gap-10 text-content items-center">
                        <p className="text-content text-center py-4 sm:py-0">Max Supply: 420,690,000,000,000</p>
                        <p className="text-content text-center py-4 sm:py-0">Locked Liquidity <a href="">View locker</a></p>
                        <p className="text-content text-center py-4 sm:py-0">1% Tax On All Transactions</p>
                        <p className="text-content text-center py-4 sm:py-0">Contract Is Audited & Fully Renounced</p>
                    </div>
               </div>
               <h1 className="text-title sm:!text-3xl !text-2xl text-center mt-10">CA: 0x0b0a8c7c34374c1d0c649917a97eee6c6c929b1b</h1>
            </div>
        </section>
    );
}

export default Tokenomics;
