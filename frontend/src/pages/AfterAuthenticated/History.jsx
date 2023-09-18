import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

const History = ({ apiPath }) => {

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
    }, [data]);

    return (
        <div className='rounded-lg bg-white p-6'>

            {data.length > 0 ? (
                <>
                    <div className='text-xl space-x-4 pb-10'>
                        <span className='font-bold tracking-tight'>Select date : </span>
                        <select className='p-2 rounded-lg outline-blue-500 bg-slate-100' onChange={(e) => setIndex(e.target.value)} name="" id="">
                            {data.map((item, index) => (
                                <option value={index}>{item.day}-{item.month}-{item.year}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        {data[index] ? (
                            <div className='grid md:grid-cols-2 gap-4'>

                                {
                                    data[index].words.map((item, index) => (
                                        <div className="block p-3 md:p-6 space-y-2 border border-gray-200 rounded-lg shadow bg-gray-50 hover:bg-green-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                <span>{item.word}</span>
                                            </h5>
                                            <p className="text-gray-700 dark:text-gray-400 font-light text-lg">
                                                <span className='font-semibold'>Sentence1 </span>: {item.sentence1}
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-400 font-light text-lg">
                                                <span className='font-semibold'>Sentence2 </span> : {item.sentence2}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </>
            ) : (
                <div>
                    {!noData ? (
                        <h1>Please wait your datas loading...</h1>
                    ) : (
                        <>
                            <h2 className='text-red-600 text-lg font-semibold'>We cannot find any data on the database that added by you.</h2>
                            <h3 className='text-slate-600'>If you want to add new words click <a href="/dashboard/routine/" className='underline text-blue-600'>Here</a>!</h3>
                        </>
                    )}
                </div>
            )}


        </div>
    )
}

export default History