import React, { useContext, useEffect, useState } from 'react'
import Describe from '../../components/AuthComponents/Home/Describe'
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';

const AuthHome = ({ apiPath, mainProfile, setLenData }) => {

    const { user } = useContext(UserContext);
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [noData, setNoData] = useState(false);

    const getData = async () => {
        try {
            await axios.get(`${apiPath}/word/unique/${user.user_id}`)
                .then(response => setData(response.data))
        } catch (err) {
            console.error(err.response.data);
        }
    }

    useEffect(() => {
        if (user) {
            getData();
        };
    }, [user]);

    useEffect(() => {
        console.log(data.length);
        setNoData(data.length === 0 ? true : false);
        setLenData(data.length);
    }, [data]);

    return (
        <div className=''>
            {!noData ? (
                <Describe data={data} mainProfile={mainProfile} user={user} />
            ) : (
                <div className='mt-20 space-y-6 p-14 bg-white rounded-xl hover:bg-blue-50'>
                    <div className='flex justify-center flex-wrap text-center '>
                        <h1 className='w-full text-5xl font-bold tracking-wider pb-2 text-green-600'>Welcome to dashboard.</h1>
                        <h1 className='w-full text-3xl font-bold tracking-tight pb-2 text-green-600'>You are ready to start learning new words.</h1>
                    </div>

                    <div className='space-y-2 text-gray-600'>
                        <h1 className='text-2xl font-semibold tracking-wider pb-2 text-gray-700'>Required steps:</h1>
                        <h1 className='text-lg tracking-wider'>1 : Go to <a href="profile/" className='text-blue-500 hover:text-blue-400 transition font-bold underline'>Profile</a> page and fill the form.</h1>
                        <h1 className='text-lg tracking-wider'>2 : After the filling Profile form you are ready to add new word which you want to learn. Go to <a href="routine/" className='text-blue-500 hover:text-blue-400 transition font-bold underline'>Routine</a> page and add new words.</h1>
                        <h1 className='text-lg tracking-wider'>3 : Following days you have to repeat the words that you added. When you ready to repeat, go to <a href="practice/" className='text-blue-500 hover:text-blue-400 transition font-bold underline'>Practice</a> page.</h1>
                    </div>

                </div>
            )}

        </div>
    )
}

export default AuthHome