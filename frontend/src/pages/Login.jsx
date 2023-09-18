import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';

const Login = ({ apiPath }) => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            let response = await axios.post(`${apiPath}/acc/login/`, loginForm,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

            console.log('stat:', response.status);

            if (response.status === 200) {

                const data = response.data;
                const accessToken = data.access;
                localStorage.setItem('accessToken', accessToken);
                window.location.href = '/dashboard/';

            } else {

                setError('Please filling the form correctly!!');

            }

        } catch (error) {
            console.error('Login Error', error);
        }

    }



    const inputStyle = 'w-full py-3 px-4 outline-none border border-light rounded-xl hover:border-green-200 hover:outline-green-200 focus:outline-green-500 focus:border-green-500';

    return (
        <>
            <div className="bg-[url('https://images.pexels.com/photos/3060324/pexels-photo-3060324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
                <NavBar />
                <div className='md:container md:mx-auto flex justify-center'>
                    <div className='w-full sm:w-4/5 md:w-355 lg:w-2/5 p-10 border  rounded-3xl shadow-md mt-44 mb-10 bg-white '>
                        <form onSubmit={handleLogin} className='space-y-4 flex justify-center flex-wrap' key='login-form'>

                            <h1 className='text-center text-5xl font-bold tracking-tight w-3/5' >Login</h1>

                            <p className='text-center text-lg font-light tracking-tighter w-4/5 pb-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod ad ullam tempora commodi.</p>

                            <div className='border w-3/5' ></div>

                            <input className={inputStyle} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} key='login-email' type="email" placeholder='e-mail here..' />

                            <input className={inputStyle} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} key='login-password' type="password" placeholder='password' />

                            <button type='submit' className='border rounded-md text-white bg-blue-600 py-3 w-full font-bold tracking-wider hover:bg-blue-500 transition duration-200'>Login</button>
                            <p>If you don't have any account <a href='/register/' className="font-semibold text-blue-700 hover:text-blue-500 hover:underline underline-offset-2">Sign up</a> here!!</p>

                        </form>
                    </div>
                </div>
                <hr className='border-1 border-slate-400' />
                <Footer />
            </div>
        </>
    )
}

export default Login