import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import About from "../About";
import Tokenomics from "../Tokenomics"
import Community from "../Community"
import Icon1 from '../../../Assets/twitter.png'
import Icon2 from '../../../Assets/telegram.png'
import Icon3 from '../../../Assets/dextools.png'
import Icon4 from '../../../Assets/cm.png'
import Icon5 from '../../../Assets/uniswap.png'

const Home = () => {
    return (
      <>
        <section className="bg-1">
          <Header/>
          <div className="all-center w-full flex-col pt-16 pb-32">
            <h2 className="text-title text-center">WELCOME TO SHEPE</h2>
            <p className="text-[#EBE821] text-center">Pepe Anime Life is a unique meme project on the blockchain, combining the iconic Pepe meme with the world of anime</p>
            <div className="flex gap-4 py-5">
              <img src={Icon1} alt="Icon" className="w-10 h-10" />
              <img src={Icon2} alt="Icon" className="w-10 h-10" />
              <img src={Icon3} alt="Icon" className="w-10 h-10" />
              <img src={Icon4} alt="Icon" className="w-10 h-10" />
              <img src={Icon5} alt="Icon" className="w-10 h-10" />
            </div>
            <div className="flex gap-3">
              <Link className="text-white py-2 px-3 border border-white rounded-full w-[100px] text-center font-semibold text-sm">POLONIEX</Link>
              <Link className="text-white py-2 px-3 border border-white rounded-full w-[100px] text-center font-semibold text-sm">BITGET</Link>
            </div>
            <div className="flex gap-3 pt-3">
              <Link className="text-white py-2 px-3 border border-white rounded-full w-[100px] text-center font-semibold text-sm">POLONIEX</Link>
              <Link className="text-white py-2 px-3 border border-white rounded-full w-[100px] text-center font-semibold text-sm">BITGET</Link>
            </div>
          </div>
        </section>
        <About/>
        <Tokenomics/>
        <Community/>
      </>
    );
}

export default Home;
