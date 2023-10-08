import React from "react";
import { Carousel } from "@material-tailwind/react";
const Story = () => {
  const users = [
    {
      imgSrc: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
      username: 'Darlene Robertson'
    },
    {
      imgSrc: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      username: 'Eleanor Pena'
    },
    {
      imgSrc: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
      username: 'Guy Hawkins'
    },
    {
      imgSrc: 'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png',
      username: 'Marvin McKinney'
    },
    {
      imgSrc: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
      username: 'Leslie Alexander'
    },
    {
      imgSrc: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
      username: 'Sabanok'
    },
  ];

  return (
    <div className="px-2 overflow-x-auto flex gap-2 items-center">
      <div className="w-full overflow-x-auto">
        <div className="flex gap-2">
          {users.map((user, index) => (
            <div key={index} className="w-20">
              <img
                src={user.imgSrc}
                width={60}
                height={60}
                alt="avatar child"
                className="mb-1 h-12 w-12 m-auto max-w-[50px]" 
              />
              <h1 className="text-story text-xs w-20 text-center">
                {user.username.length > 8
                  ? `${user.username.substring(0, 8)}...`
                  : user.username}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;