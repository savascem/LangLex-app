import React, { useContext, useState } from 'react'
import { BiLogOut } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';
import { RiSpeedUpLine } from 'react-icons/ri';
import { PiPencilSimpleLineDuotone } from 'react-icons/pi';
import { UserContext } from '../../contexts/UserContext';
import { PiArticleMediumBold } from 'react-icons/pi';
import { MdOutlineCloseFullscreen } from 'react-icons/md';
import { AiOutlineSchedule } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ profilePic, firstName, setHideSideBar }) => {

    const { user } = useContext(UserContext);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/login/';
    };

    const btnClass = 'lg:flex lg:items-center lg:p-3 text-3xl lg:text-xl text-white rounded-lg dark:text-white hover:text-blue-500 lg:hover:bg-gray-700 lg:hover:text-white dark:hover:bg-gray-700 group'

    return (
        <div id="logo-sidebar" className="fixed h-screen w-1/5 bg-gradient-to-r from-gray-600 to-slate-500" aria-label="Sidebar">
            <div className="flex flex-wrap py-4 px-4">
                <div className='w-full flex justify-end flex-wrap'>
                    <button onClick={() => setHideSideBar(true)} className='text-2xl text-white transition ease-in-out delay-120 flex justify-center flex-wrap hover:scale-150 hover:text-red-300'>
                        <MdOutlineCloseFullscreen />
                        <h1 className='text-xs w-full'>Hide</h1>
                    </button>
                </div>
                <a href="/dashboard/" className="flex items-center bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent hover:from-green-400 hover:to-green-300 transition duration-200 hover:border-b-2 hover:border-green-300 py-4 sm:py-1">
                    <span className='text-sm sm:text-2xl md:text-2xl lg:text-4xl font-bold tracking-tighter md:pl-6'>
                        LangLex</span>
                </a>
                <ul className="font-medium pt-2 flex-wrap w-full ml-2 sm:ml-5">
                    <li className=''>
                        <a href='/dashboard/' name='home' key='home' className={`${btnClass}`}>
                            <FaHome />
                            <span className="ml-3 invisible lg:visible">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href='/dashboard/routine/' name='routine' key='routine' className={`${btnClass}`} >
                            <FiBookOpen />
                            <span className="ml-3 invisible lg:visible">Routine</span>
                        </a>
                    </li>
                    <li>
                        <a href='/dashboard/practice/' name='practice' key='practice' className={`${btnClass}`}>
                            <PiPencilSimpleLineDuotone />
                            <span className="ml-3 invisible lg:visible">Practice</span>
                        </a>
                    </li>
                    <li>
                        <a href='/dashboard/article/' name='article' key='article' className={`${btnClass}`}>
                            <PiArticleMediumBold />
                            <span className="ml-3 invisible lg:visible">Article</span>
                        </a>
                    </li>
                    <li>
                        <a href='/dashboard/history/' name='history' key='history' className={`${btnClass}`}>
                            <AiOutlineSchedule />
                            <span className="ml-3 invisible lg:visible">History</span>
                        </a>
                    </li>
                </ul>
                <div className='absolute bottom-4'>
                    <ul className="font-medium space-y-3">
                        <li className=''>
                            <a href="/dashboard/profile/" className="flex items-center sm:p-3 text-xl rounded-lg text-white hover:text-green-200 transition dark:hover:bg-gray-700 group hover:opacity-75">
                                <img src={profilePic ? profilePic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cHJ-VgGh9t686MqHvbO0ZQiREiEveXe-98z9aOI&s'} alt="" className='rounded-full border h-12 w-12 outline outline-slate-500' />
                                <span className="ml-3 invisible xl:visible">{firstName ? (<>{firstName}</>) : (<>Profile</>)}</span>
                            </a>
                        </li>
                        <li>
                            <button onClick={handleLogout} type='submit' className="flex items-center p-1 sm:p-3 text-4xl xl:text-xl rounded-lg text-white hover:text-red-400 transition dark:hover:bg-gray-700 group">
                                <BiLogOut />
                                <span className="ml-3 invisible xl:visible">Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar