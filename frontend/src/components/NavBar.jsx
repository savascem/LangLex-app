import React from 'react'

const NavBar = () => {
    return (
        <div className='bg-gradient-to-r from-slate-200 to-transparent fixed flex w-full opacity-95'>
            <div className='container mx-auto py-3 md:py-4'>
                <header className='ml-6 flex justify-between items-center'>

                    <button onClick={() => window.location.replace('/')} className='bg-gradient-to-r from-green-800 to-sky-600 bg-clip-text text-transparent text-3xl md:text-5xl font-bold tracking-tighter rounded-2xl block hover:from-blue-700 hover:to-blue-500 transition'>
                        <p class="p-2 ">
                            <h1 className=''>LangLex</h1>
                            <span className='text-lg flex w-full pt-1 font-light tracking-normal'>Words Unleashed, Knowledge Unlocked.</span>
                        </p>
                    </button>

                    <div className='md:flex md:justify-between items-center'>
                        <div className='space-x-6 ml-6 sm:ml-0 pb-8 sm:pb-0'>
                            <button onClick={() => window.location.replace('/register/')} className='rounded-2xl py-1 sm:py-4 px-2 sm:px-10 font-bold tracking-tighter text-xl bg-gradient-to-r from-green-700 to-green-500 hover:from-green-400 hover:to-green-500 transition duration-150 text-white'>
                                Sign Up
                            </button>
                            <button onClick={() => window.location.replace('/login/')} className='rounded-2xl py-1 sm:py-4 px-2 sm:px-10 font-bold tracking-tighter text-xl bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-300 hover:to-blue-400 transition duration-150 text-white'>
                                Login
                            </button>
                        </div>
                    </div>

                </header>
            </div>
        </div>
    )
}

export default NavBar;