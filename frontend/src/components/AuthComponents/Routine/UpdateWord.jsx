import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const UpdateWord = ({ setCloseUpdate, data, apiPath, id, creator, setReload }) => {

    const [updateForm, setUpdateForm] = useState('');

    useEffect(() => {
        setUpdateForm({
            'creator': creator,
            'word': data.word,
            'sentence1': data.sentence1,
            'sentence2': data.sentence2,
            'repeat': data.repeat,
        });
    }, [data]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${apiPath}/word/update/${id}`, updateForm, {
            });
            setCloseUpdate(false);
            setReload(true);
        } catch (error) {
            console.error(error.response)
        }
    }

    return (

        <form onSubmit={handleUpdate} className={`fixed w-full inset-0 max-h-full bg-slate-300 bg-opacity-70 flex items-center justify-center h-screen`}>
            <div className='flex flex-wrap space-y-4 m-20 md:m-52 xl:m-72 border-4 p-10 rounded-lg bg-white'>
                <div className='w-full flex justify-end'>
                    <a onClick={() => setCloseUpdate(false)} className=''><button><AiOutlineClose size={20} /></button></a>
                </div>
                <label className='text-xl font-semibold tracking-tighter' htmlFor="word">Word:</label>
                <input type="text" name='word' className='w-full px-3 rounded-md bg-slate-100 outline-green-600 h-10 text-xl focus:bg-slate-50' value={updateForm.word} onChange={(e) => setUpdateForm({ ...updateForm, word: e.target.value })} />

                <label className='text-xl font-semibold tracking-tighter' htmlFor="sentence1">Sentence 1:</label>
                <input type="text" name='sentence1' className='w-full px-3 rounded-md bg-slate-100 outline-green-600 h-10 text-xl focus:bg-slate-50' value={updateForm.sentence1} onChange={(e) => setUpdateForm({ ...updateForm, sentence1: e.target.value })} />

                <label className='text-xl font-semibold tracking-tighter' htmlFor="sentence2">Sentence 2:</label>
                <input type="text" name='sentence2' className='w-full px-3 rounded-md bg-slate-100 outline-green-600 h-10 text-xl focus:bg-slate-50' value={updateForm.sentence2} onChange={(e) => setUpdateForm({ ...updateForm, sentence2: e.target.value })} />

                <label className='text-xl font-semibold tracking-tighter' htmlFor="repeat">Repeat:</label>
                <select type="text" name='repeat' className='block text-center w-full rounded-md bg-slate-100 outline-green-600 h-10 text-xl focus:bg-slate-50' value={updateForm.repeat} onChange={(e) => setUpdateForm({ ...updateForm, repeat: Number(e.target.value) })}>
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

                <div className='w-full pt-3'>
                    <button type='submit' className='flex w-full justify-center items-center space-x-3 text-green-600 text-xl font-bold tracking-tight py-2 rounded-lg outline outline-green-600 hover:text-green-400 hover:outline-green-400 transition duration-100'>Update <span> </span><AiOutlineCheck className='' /></button>
                </div>
            </div>
        </form>

    )
}

export default UpdateWord