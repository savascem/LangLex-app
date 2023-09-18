import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from './../../contexts/UserContext';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { TbZoomReset } from 'react-icons/tb';
import UpdateWord from './../../components/AuthComponents/Routine/UpdateWord';


const DailyRoutine = ({ apiPath, mainProfile }) => {

    const { user } = useContext(UserContext);

    const id = Number(user.user_id);

    const [words, setWords] = useState([]);

    const [addNew, setAddNew] = useState(false);

    const [closeUpdate, setCloseUpdate] = useState(false);

    const [reload, setReload] = useState(false);

    const [wordAddError, setWordError] = useState('');

    const [wordForm, setWordForm] = useState({
        creator: null,
        word: '',
        sentence1: '',
        sentence2: '',
        repeat: 2,
    });

    useEffect(() => {
        if (user) {
            axios.get(`${apiPath}/word/today/${user.user_id}`)
                .then((response) => setWords(response.data))
            setReload(false);
        };
    }, [apiPath, id, reload]);

    const handleAddWord = async (e) => {
        e.preventDefault();
        if (user) {
            setWordForm({ ...wordForm, creator: Number(user.user_id) });
            try {
                let result = await axios.post(`${apiPath}/word/`, wordForm);
                setAddNew(false);
                setWordError('');
                setWordForm({
                    creator: null,
                    word: '',
                    sentence1: '',
                    sentence2: '',
                    repeat: 2,
                });
                setReload(true);
            } catch (error) {
                setWordError(error.response.data.word);
            };
        };
    };

    const handleDelete = async (e, id) => {
        e.preventDefault();
        axios.delete(`${apiPath}/word/delete/${id}`);
        setReload(true);
    }

    return (
        <div className='space-y-8'>
            <div className='border rounded-lg bg-white shadow-md'>
                <div className='p-5 flex flex-wrap'>
                    {words ? (
                        words.length === mainProfile.daily_goal ? (
                            <h2 className='text-2xl font-normal w-full'>You already reach your daily goal.</h2>
                        ) : (
                            <h2 className='text-2xl font-normal w-full'>You have to add <span className='font-bold'>{mainProfile.daily_goal - words.length} words</span> for reach your daily goal !</h2>
                        )
                    ) : (
                        <h2 className='text-2xl font-normal w-full'>You didn't add any words today. Just add <span className='font-bold'>{mainProfile.daily_goal} new words</span> and reach your daily goal!.</h2>
                    )}
                </div>
            </div>

            <div className="xl:grid lg:grid-cols-4 gap-6 items-center">

                {words.map(item => (

                    <div className="col-span-2 block p-3 md:p-6 space-y-3 border border-gray-200 rounded-lg shadow bg-white hover:bg-green-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <span>{item.word}</span>
                        </h5>
                        <p className="text-gray-700 dark:text-gray-400 font-light text-lg">
                            <span className='font-semibold'>Sentence1 </span>: {item.sentence1}
                        </p>
                        <p className="text-gray-700 dark:text-gray-400 font-light text-lg">
                            <span className='font-semibold'>Sentence2 </span> : {item.sentence2}
                        </p>
                        <div className='pt-3 flex justify-end space-x-3'>
                            <button onClick={() => setCloseUpdate(true)} class="flex justify-center items-center space-x-3 text-white text-lg font-bold tracking-tight py-2 bg-gradient-to-r from-green-600 to-green-500 px-2 rounded-lg outline outline-green-600 hover:from-white hover:text-green-600 hover:outline-green-400 transition duration-100" type="button">
                                Update <span></span><TbZoomReset className='' />
                            </button>
                            <div className={`${closeUpdate ? '' : 'hidden'}`}>
                                <UpdateWord setReload={setReload} creator={id} setCloseUpdate={setCloseUpdate} apiPath={apiPath} id={item.id} data={item} />
                            </div>
                            <form onSubmit={(e) => handleDelete(e, item.id)} action="" className=''>
                                <button type='submit' className='flex justify-center items-center space-x-3 text-white text-lg font-bold tracking-tight py-2 bg-gradient-to-r from-red-500 to-red-600 px-2 rounded-lg outline outline-red-600 hover:from-white hover:text-red-600 hover:outline-red-400 transition duration-100'>Delete <span></span><RiDeleteBinLine className='' /></button>
                            </form>
                        </div>
                    </div>


                ))}

                {!(words.length === mainProfile.daily_goal) &&
                    (
                        <>
                            <div className={`col-span-2 text-center ${addNew && 'hidden'}`}>
                                <button onClick={() => setAddNew(true)} className='text-green-600 hover:text-green-400 transition duration-150'><AiOutlinePlusSquare size={96} className='' /></button>
                                <h1 className='text-xl text-green-600'>Add New Word</h1>
                            </div>
                            <div className={`col-span-2 border rounded-lg bg-gray-100 shadow-md p-5 ${!addNew && 'hidden'}`}>
                                <div className='w-full flex justify-end'>
                                    <a onClick={() => setAddNew(false)} className=''><button><AiOutlineClose size={20} /></button></a>
                                </div>
                                <form onSubmit={handleAddWord} action="" className='flex flex-wrap space-y-4'>
                                    <label className='text-xl font-semibold tracking-tighter' htmlFor="word">Word:</label>
                                    <input type="text" name='word' className='w-full px-3 rounded-md bg-white outline-green-600 h-10 text-xl' value={wordForm.word} onChange={(e) => setWordForm({ ...wordForm, word: e.target.value })} placeholder='Word..' />

                                    <label className='text-xl font-semibold tracking-tighter' htmlFor="sentence1">Sentence 1:</label>
                                    <input type="text" name='sentence1' className='w-full px-3 rounded-md bg-white outline-green-600 h-10 text-xl' value={wordForm.sentence1} onChange={(e) => setWordForm({ ...wordForm, sentence1: e.target.value })} placeholder='Sentence 1..' />

                                    <label className='text-xl font-semibold tracking-tighter' htmlFor="sentence2">Sentence 2:</label>
                                    <input type="text" name='sentence2' className='w-full px-3 rounded-md bg-white outline-green-600 h-10 text-xl' value={wordForm.sentence2} onChange={(e) => setWordForm({ ...wordForm, sentence2: e.target.value })} placeholder='Sentence 2..' />

                                    <label className='text-xl font-semibold tracking-tighter' htmlFor="repeat">Repeat:</label>
                                    <select type="text" name='repeat' className='block text-center w-full rounded-md bg-white outline-green-600 h-10 text-xl' value={wordForm.repeat} onChange={(e) => setWordForm({ ...wordForm, repeat: Number(e.target.value) })}>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                    </select>

                                    {wordAddError && <h1 className='w-full text-center text-lg text-red-700 font-semibold'>Error: <span className='capitalize'>{wordAddError}</span></h1>}


                                    <div className='w-full pt-3'>
                                        <button type='submit' className='bg-green-600 flex w-full justify-center items-center space-x-3 text-white text-xl font-bold tracking-tight py-2 rounded-lg outline outline-green-600 hover:bg-green-400 hover:outline-green-400 transition duration-100'>Add <span> </span><AiOutlineCheck className='' /></button>
                                    </div>
                                </form>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default DailyRoutine