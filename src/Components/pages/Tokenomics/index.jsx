import React from "react";
import { Link } from "react-router-dom";
import Tokenomic from '../../../Assets/item-token.png'

const Tokenomics = () => {
    return (
        <section className="bg-1">
            {/* <div className="bg-overlay"/> */}
            <div className="all-center w-full flex-col pt-16 pb-32">
                <img src={Tokenomic} alt="Tokenomic" width={1000} height={1000} className="rounded-[36px]" />
               <div className="w-[75%] mt-20">
                    <h2 className="text-title text-center pt-10">Tokenomics</h2>
                    <div className=" sm:flex block gap-10 text-conent items-center">
                        <p className="text-conent text-center py-4 sm:py-0">Max Supply: 420,690,000,000,000</p>
                        <p className="text-conent text-center py-4 sm:py-0">Locked Liquidity <a href="">View locker</a></p>
                        <p className="text-conent text-center py-4 sm:py-0">1% Tax On All Transactions</p>
                        <p className="text-conent text-center py-4 sm:py-0">Contract Is Audited & Fully Renounced</p>
                    </div>
               </div>
               <h1 className="text-title sm:!text-3xl !text-sm text-center mt-10">CA: 0x0b0a8c7c34374c1d0c649917a97eee6c6c929b1b</h1>
            </div>
        </section>
    );
}

export default Tokenomics;
