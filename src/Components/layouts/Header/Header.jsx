import React from "react"
import { Link } from "react-router-dom"
import Logo from '../../../Assets/logon-friend-hub.png'
import IconETH from '../../../Assets/icon-ethereum.png'
import IconLogOut from '../../../Assets/icon-log-out.png'
const Header = () => {
    return (
        <div className="fixed w-full top-0">
            <div className="p-4">
            <div className="p-4 flex justify-between items-center bg-white text-gray-500 rounded-2xl shadow-md w-full m-auto">
                <div className="">
                    <Link to={'/'}>
                        <img src={Logo} alt="Logo"></img>
                    </Link>
                </div>
                <div className="flex gap-5">
                    <div className="flex gap-2">
                        <img src={IconETH} alt="Icon Erthereum"></img>
                        <h1 className="font-bold">0 ETH</h1>
                    </div>
                    <div className="">
                        <img src={IconLogOut} alt="Icon Log out"></img>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Header