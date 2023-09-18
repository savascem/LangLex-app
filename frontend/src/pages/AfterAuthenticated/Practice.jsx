import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

const Practice = ({ apiPath, lenData }) => {

    const { user } = useContext(UserContext);
    const [practiceData, setPracticeData] = useState([]);
    const [error, setError] = useState(false);
    const [visibleWords, setVisibleWords] = useState(3);
    const [reload, setReload] = useState(false);


    useEffect(() => {
        if (user) {
            try {
                axios.get(`${apiPath}/word/total/repeat/${user.user_id}`)
                    .then(response => setPracticeData(response.data))
                setError(false);
                setReload(false);
            } catch (error) {
                console.error(error.response.data);
                setError(true);
            };
        };
        console.log(practiceData);
    }, [user, reload])

    const handleRepeat = async (e, id) => {
        e.preventDefault();
        try {
            const result = await axios.put(`${apiPath}/word/repeat/${id}`, {});
            setReload(true);
        } catch (error) {
            console.error(error.response.data);
        }
    }

    const handleLoadMore = () => {
        setVisibleWords(prevCount => prevCount + 3);
    }

    return (
        <div className='space-y-10'>

            {practiceData.length ? (
                <div className='border rounded-lg bg-white shadow-md p-5 space-y-3'>
                    <h1 className='text-2xl text-slate-600'>Today, you have <span className='font-bold'>{practiceData.length}</span> words to repeat.</h1>
                    <h2 className='text-lg font-light'>When you finished your daily practice, you can read articles which will create by AI. The articles will help to your learning journey. The articles will contains the words that you try to learn.</h2>
                </div>
            ) : (
                lenData ? (
                    <div className='border rounded-lg bg-white shadow-md p-5 space-y-3'>
                        <h1 className='text-2xl text-slate-600'>You have finished your daily practice.</h1>
                        <h2 className='text-lg font-light'>Now, you can read articles which will create by AI. The articles will help to your learning journey. The articles will contains the words that you try to learn.</h2>
                    </div>
                ) : (
                    <div className='space-y-2 p-14 bg-white rounded-2xl hover:bg-green-50'>
                        <h2 className='text-red-600 text-lg font-semibold'>We cannot find any data on the database that added by you.</h2>
                        <h3 className='text-slate-600'>If you want to add new words click <a href="/dashboard/routine/" className='underline text-blue-600'>Here</a>!</h3>
                    </div>
                )

            )}



            <div className='md:grid md:grid-cols-2 gap-6 items-center space-y-1'>
                {practiceData.slice(0, visibleWords).map(item => (

                    <div className="block p-3 md:p-6 space-y-2 border border-gray-200 rounded-lg shadow bg-white hover:bg-green-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className='space-y-2'>

                            <h3 className='w-full flex justify-end'>Added date : {
                                <div className='font-bold'>
                                    {new Date(item.added_date).getFullYear()}-
                                    {new Date(item.added_date).getMonth() + 1}-
                                    {new Date(item.added_date).getDate()}
                                </div>
                            }</h3>

                            <h3 className='w-full flex justify-end'>Last Repeat : {
                                <div className='font-bold'>
                                    {new Date(item.repeat_date).getFullYear()}-
                                    {new Date(item.repeat_date).getMonth() + 1}-
                                    {new Date(item.repeat_date).getDate()}
                                </div>
                            }</h3>
                        </div>
                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <span>{item.word}</span>
                        </h5>
                        <p className="text-gray-700 dark:text-gray-400 font-light text-lg">
                            <span className='font-semibold'>Sentence1 </span>: {item.word_sentence1}
                        </p>
                        <p className="text-gray-700 dark:text-gray-400 font-light text-lg">
                            <span className='font-semibold'>Sentence2 </span> : {item.word_sentence2}
                        </p>

                        <form onSubmit={(e) => handleRepeat(e, item.word_id)} className='pt-3'>
                            <span className='text-lg font-light tracking-tight'>If you repeated it, click here : </span>
                            <button type='submit' className='text-blue-600 font-bold text-lg hover:text-blue-400 transition'>Repeat !</button>
                        </form>

                        <div className='space-x-4 text-lg w-full flex justify-end'>
                            <span>Your repeat goal : <span className='font-bold'>{item.required_repeat}</span></span>
                            <span>Total repeat : <span className='font-bold'>{item.repeat}</span></span>
                        </div>
                    </div>

                ))}
                {practiceData.length > visibleWords && (
                    <div className="text-center mt-4">
                        <button
                            onClick={handleLoadMore}
                            className="px-4 py-2 font-medium text-slate-700 rounded"
                        >
                            Load More..
                        </button>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Practice