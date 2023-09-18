import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from './../components/Footer';
import { useNavigate } from 'react-router-dom';

const Register = ({ apiPath }) => {

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);

    const navigation = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        console.log(form);

        try {
            const response = await fetch(`${apiPath}/acc/create/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            console.log(response);

            if (response.ok) {
                navigation('/login');
            } else {
                setError('Please filling the form correctly!!');
            }
        } catch (error) {
            setError("An error occurred while processing your request.");
        }
    };

    const inputStyle = 'w-full py-3 px-4 outline-none border border-light rounded-xl hover:border-green-200 hover:outline-green-200 focus:outline-green-500 focus:border-green-500';

    return (
        <>
            <div className="bg-[url('https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
                <NavBar />
                <div className="md:container md:mx-auto flex justify-center">
                    <div className='w-full sm:w-4/5 md:w-355 lg:w-2/5 p-10 border rounded-3xl shadow-md mt-44 mb-10 bg-white'>
                        <form onSubmit={submit} className='space-y-4 flex justify-center flex-wrap' key='signup-form'>

                            <h1 className='text-center text-5xl font-bold tracking-tight w-3/5' >Register</h1>
                            <p className='text-center text-lg font-light tracking-tighter w-4/5 pb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod ad ullam tempora commodi.</p>
                            <div className='border w-3/5' ></div>
                            <input className={inputStyle} key='signup-email' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder='e-mail here..' />
                            <input className={inputStyle} key='signup-password' value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" placeholder='password' />
                            <button type='submit' className='border rounded-md text-white bg-blue-600 py-3 w-full font-bold tracking-wider hover:bg-blue-500 transition duration-200'>Register</button>
                            <p>Do you have any account ? <a href='/login/' className="font-semibold text-blue-700 hover:text-blue-500 hover:underline underline-offset-2">Login</a> here!!</p>
                            <div className='text-center'>
                                {error ? (<div className="text-red-500 mt-2">{error}</div>) : (<div></div>)}
                            </div>

                        </form>
                    </div>
                </div>
                <hr className='border-1 border-slate-400' />
                <Footer />
            </div>
        </>
    )
}

export default Register