import React from "react"
import IconMore from '../../../Assets/icon-more.png'
import IconHeart from '../../../Assets/icon-heart.png'
import IconCmt from '../../../Assets/icon-cmt.png'
import IconShare from '../../../Assets/icon-share.png'
import IconBookMark from '../../../Assets/icon-bookmark.png'

const Newfeed = () => {
    return (
        <div className="p-4 border-b border-blue-100">
            <div className="flex justify-between items-center">
               <div className="flex items-center">
                    <img src={'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'} 
                        alt="Avatar" 
                       className="w-9 h-9"
                    />
                    <div className="pl-2">
                        <div className="flex gap-2">
                            <h1 className="font-bold">Ruffles</h1>
                            <h2 className="text-story">30 minutes ago</h2>
                        </div>
                        <h2 className="text-story text-sm">64f89e00381b54af2536f067</h2>
                    </div>
               </div>
               <img src={IconMore} width={20} height={20} alt="icon more" />
            </div>
            <div className="w-full mt-2">
                <img src={'https://azpet.com.vn/wp-content/uploads/2022/07/M787-M12495-1.jpg'} alt="Pic Newfeed" />
            </div>
            <div className="flex justify-between py-4">
                <div className="flex items-center gap-3">
                    <img src={IconHeart} alt="Icon Heart" />
                    <img src={IconCmt} alt="Icon Cmt" />
                    <img src={IconShare} alt="Icon Share" />
                </div>
                <img src={IconBookMark} alt="Icon BookMark" />
            </div>
            <div className="">
                <h1 className="font-bold">100 Likes</h1>
                <div>
                    <h1>
                        <strong className="mr-2">Username</strong> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ...  
                        <strong className="text-story !font-normal pl-1">more</strong>
                    </h1>
                </div>
                <h3 className="text-story text-sm py-2">View all 16 comments</h3>
                <div className="flex gap-4 py-2">
                    <img src={'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'} 
                        alt="Avatar" 
                       className="w-6 h-6"
                    />
                    <h2 className="text-story">Add a comment...</h2>
                </div>
            </div>
        </div>
    )
}

export default Newfeed