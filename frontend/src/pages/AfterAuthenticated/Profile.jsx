import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import axios from 'axios';

const Profile = ({ mainProfile, apiProfile }) => {

    const [profileUpdateForm, setProfileUpdateForm] = useState('');

    const [error, setError] = useState(null);

    useEffect(() => {
        setProfileUpdateForm({
            'first_name': mainProfile.first_name,
            'last_name': mainProfile.last_name,
            'native_language': mainProfile.native_language,
            'interested_area1': mainProfile.interested_area1,
            'interested_area2': mainProfile.interested_area2,
            'daily_goal': mainProfile.daily_goal,
            'profile_picture': '',
        });
    }, [mainProfile]);

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');
        try {
            const response = await axios.put(apiProfile, profileUpdateForm, {
                'Authorization': `Bearer ${token}`,
                headers: { "content-type": "multipart/form-data" },
            });
            setProfileUpdateForm(response.data);
            window.location.reload(false);
        } catch (error) {
            if (error.response && error.response.data) {
                const { non_field_errors } = error.response.data;
                setError(non_field_errors);
            }
        }
    }

    const profileInput = 'sm:w-3/5 py-3 px-1 sm:px-4 outline-none border border-slate-300 rounded-lg hover:outline-slate-300 focus:outline-slate-400 shadow-md focus:shadow-xl text-lg font-light focus:font-normal focus:text-slate-700';

    const spanClass = 'text-xl tracking-tight font-semibold text-slate-600';

    return (
        <div>

            <h1 className='pb-6 text-3xl font-semibold text-center'>Your Profile</h1>

            <div className='p-2 sm:p-4 md:p-8 outline rounded-md outline-slate-200 bg-white shadow-xl'>

                <form onSubmit={handleProfileUpdate} id='user-profile-form' className='space-y-2 md:space-y-4'>

                    <div className='lg:grid lg:grid-cols-3 grid-rows-2 items-center'>

                        <div className='col-span-1 row-span-2 space-y-4 flex justify-center flex-wrap'>
                            <img className='rounded-lg border-4 border-white outline outline-slate-400 w-64 shadow-lg' src={mainProfile.profile_picture ? mainProfile.profile_picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cHJ-VgGh9t686MqHvbO0ZQiREiEveXe-98z9aOI&s'} alt="" />
                            <input type="file" onChange={(e) => setProfileUpdateForm({ ...profileUpdateForm, profile_picture: e.target.files[0] })} />

                        </div>

                        <div className='col-span-2 row-span-1 sm:flex sm:justify-center items-center space-x-4 pt-4 lg:pt-0'>
                            <span className={spanClass}>First name : </span>
                            <input className={profileInput} type="text" name="first-name" id="first-name" value={profileUpdateForm.first_name} onChange={(e) => setProfileUpdateForm({ ...profileUpdateForm, first_name: e.target.value })} />
                        </div>
                        <div className='col-span-2 row-span-1 sm:flex sm:justify-center items-center space-x-4 pt-4 lg:pt-0'>
                            <span className={spanClass}>Last name : </span>
                            <input className={profileInput} type="text" name="last-name" id="last-name" value={profileUpdateForm.last_name} onChange={(e) => setProfileUpdateForm({ ...profileUpdateForm, last_name: e.target.value })} />
                        </div>

                    </div>

                    <div className="lg:grid lg:grid-cols-2 space-y-4 sm:space-y-10 lg:space-y-20 py-2 sm:py-8 lg:py-14">
                        <div className="col-span-2 flex justify-center items-center sm:space-x-4">
                            <span className={spanClass}>Native Language : </span>
                            <select className={`block ${profileInput}`} type="text" id='grid-state' value={profileUpdateForm.native_language} onChange={(e) => setProfileUpdateForm({ ...profileUpdateForm, native_language: e.target.value })} >
                                <option value="">-</option>
                                <option value="German">German</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Turkish">Turkish</option>
                            </select>
                        </div>
                        <div className="lg:col-span-1 flex justify-center items-center space-x-4  flex-wrap">
                            <h1 className={`${spanClass} w-full text-center pb-2`}>Interested Area 1 : </h1>
                            <select className={`block ${profileInput}`} type="text" name="int-area1" id="int-area1" value={profileUpdateForm.interested_area1} onChange={(e) => setProfileUpdateForm({ ...profileUpdateForm, interested_area1: e.target.value })}>
                                <option value="">-</option>
                                <option value="Technology">Technology</option>
                                <option value="Education">Education</option>
                                <option value="Sport">Sport</option>
                                <option value="Music">Music</option>
                            </select>
                        </div>
                        <div className="col-span-1 flex justify-center items-center space-x-4 flex-wrap">
                            <h1 className={`${spanClass} w-full text-center pb-2`}>Interested Area 2 : </h1>
                            <select className={`block ${profileInput}`} type="text" name="int-area1" id="int-area2" value={profileUpdateForm.interested_area2} onChange={(e) => setProfileUpdateForm({ ...profileUpdateForm, interested_area2: e.target.value })}>
                                <option value="">-</option>
                                <option value="Technology">Technology</option>
                                <option value="Education">Education</option>
                                <option value="Sport">Sport</option>
                                <option value="Music">Music</option>
                            </select>                        </div>
                        <div className="col-span-2 sm:flex sm:justify-center items-center space-x-4">
                            <span className={spanClass}>Your Daily Goal : </span>
                            <input className={profileInput} type="text" name="daily_goal" id="daily_goal" value={profileUpdateForm.daily_goal} onChange={(e) => setProfileUpdateForm({ ...profileUpdateForm, daily_goal: e.target.value })} />
                        </div>
                    </div>
                    <div className='flex justify-center flex-wrap space-y-4'>
                        <h1 className='text-center w-full text-red-600 font-semibold text-xl'>{error && `Error : ${error}`}</h1>
                        <button type='submit' className='py-4 px-4 md:px-10 text-lg md:text-xl font-semibold tracking-tight text-white rounded-md bg-green-600 hover:bg-green-500 transition duration-150 border-4 border-white outline hover:outline-green-400 shadow-sm'>Update your Profile</button>
                    </div>
                </form>
            </div >



        </div >
    )
}

export default Profile