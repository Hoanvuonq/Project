import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import Logo from "../../../Assets/logo.png"
import IconMenu from "../../../Assets/icon-menu.png"


const Header = () => {
    const [openLeft, setOpenLeft] = React.useState(false);
    const openDrawerLeft = () => setOpenLeft(true);
    const closeDrawerLeft = () => setOpenLeft(false);
    return (
        <div className="flex justify-between pr-4 sm:p-0 sm:px-20 py-5 items-center">
            <img src={Logo} alt="Logo" className="w-[100px] h-[50px]" />
            <div className="sm:flex gap-5 hidden">
                <p className="text-white font-bold">About</p>
                <p className="text-white font-bold">Tokenomics</p>
                <p className="text-white font-bold">Community</p>
            </div>
            <Button className="block sm:hidden" onClick={openDrawerLeft}>
                <img src={IconMenu} alt="Logo" width={24} height={24} className="" />
            </Button>
            <Drawer
                placement="left"
                open={openLeft}
                onClose={closeDrawerLeft}
                className="p-4"
            >
                <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                    <div className="mt-10">
                        <p className="py-2 font-bold">About</p>
                        <p className="py-2 font-bold">Tokenomics</p>
                        <p className="py-2 font-bold">Community</p>
                    </div>
                </Typography>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="!absolute top-0 right-0"
                    onClick={closeDrawerLeft}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </IconButton>
                </div>
            </Drawer>
        </div>
    );
}

export default Header;
