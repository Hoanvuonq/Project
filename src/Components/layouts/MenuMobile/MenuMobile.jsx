import React from "react";
import { Link } from "react-router-dom";
import IconHome from '../../../Assets/icon-home.png';
import IconSearch from '../../../Assets/icon-search.png';
import IconPlus from '../../../Assets/icon-plus.png';
import IconFile from '../../../Assets/icon-file.png';
import IconUser from '../../../Assets/icon-user-avatar.png';

const iconData = [
  { src: IconHome, alt: "Icon Home", width: 34, height: 34, link: '/' },
  { src: IconSearch, alt: "Icon Search", width: 34, height: 34 },
  { src: IconPlus, alt: "Icon Plus", width: 50, height: 50 },
  { src: IconFile, alt: "Icon File", width: 34, height: 34 },
  { src: IconUser, alt: "Icon User", width: 34, height: 34 },
];

const MenuMobile = () => {
  return (
    <div className="fixed w-full bottom-0">
      <div className="p-4">
        <div className="px-6 py-2 flex justify-between items-center bg-white rounded-2xl shadow-md w-full m-auto">
          {iconData.map((icon, index) => (
            <div key={index}>
              <Link to={icon.link}>
                <img
                  src={icon.src}
                  width={icon.width}
                  height={icon.height}
                  alt={icon.alt}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
