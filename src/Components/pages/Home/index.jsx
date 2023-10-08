import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header/Header";
import MenuMobile from "../../layouts/MenuMobile/MenuMobile";
import Story from "../../layouts/Story/Story";
import Newfeed from "../../layouts/Newfeed/Newfeed";

const category = [
  { id: 1, name: 'My Post', link: '/' },
  { id: 2, name: 'All', link: '/' },
  { id: 3, name: 'Follow', link: '/' },
  { id: 4, name: 'Popular', link: '/' },
  { id: 5, name: 'Bookmark', link: '/' },
];

const Home = () => {
    return (
      <>
        <Header />
        <div className="pt-24 bg-body">
          <Story />
          <div className="px-2 py-2">
            <div className="flex bg-blue-50 rounded-2xl gap-5 p-4 justify-center">
              {category.map((item) => (
                <div key={item.id} className="text-story text-sm font-bold">
                  <Link
                    to={item.link}
                    className="link-item"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Newfeed />
          <Newfeed />
          <Newfeed />
        </div>
        <MenuMobile />
      </>
    );
}

export default Home;
