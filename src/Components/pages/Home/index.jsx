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
        <div className="bg-overlay"/>
          <Header/>
          <div className="all-center w-full flex-col h-full relative z-20">
            <h2 className="text-title sm:text-[120px] !text-6xl text-center">WELCOME TO PEPE</h2>
            <p className="text-content text-center">Pepe Anime Life is a unique meme project on the blockchain, combining the iconic Pepe meme with the world of anime</p>
            <div className="flex gap-4 py-5">
              <img src={Icon1} alt="Icon" width={60} height={60} />
              <img src={Icon2} alt="Icon" width={60} height={60} />
              <img src={Icon3} alt="Icon" width={60} height={60} />
              <img src={Icon4} alt="Icon" width={60} height={60} />
              <img src={Icon5} alt="Icon" width={60} height={60} />
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
