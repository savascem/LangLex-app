import React, { useState } from 'react'
import NavBar from './../components/NavBar';
import Footer from '../components/Footer';
import Testimonials from './../components/Testimonials';

const Home = () => {

    const [btn1, setBtn1] = useState(true);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);

    const handleContent = (btnInd) => {

        const btns = [
            (state) => setBtn1(state),
            (state) => setBtn2(state),
            (state) => setBtn3(state),
        ];

        btns.map((item, index) => {
            if (index === btnInd) {
                item(true);
            } else {
                item(false);
            }
        });

    };

    const contentBtnClass = 'p-10 border-b w-full text-xl h-full lg:h-44 text-start font-medium';
    const subBtnContentClass = 'text-lg pt-3 font-light text-black';

    return (
        <div>
            <NavBar />
            {/* title */}
            <div className='flex '>
                <div className="bg-[url('https://images.pexels.com/photos/2925306/pexels-photo-2925306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover w-full h-full pb-16">
                    <div className='pt-24'>

                        <div className='container mx-auto px-10 md:px-52 py-8 md:py-24 text-center space-y-6 tracking-tighter'>
                            <div className='bg-white p-12 rounded-3xl opacity-80'>
                                <h1 className='text-2xl md:text-5xl font-bold'>New approach of the learning words.</h1>
                                <h1 className='text-3xl md:text-6xl font-extrabold'>Let's Try this for free !!</h1>
                                <h2 className='text-md md:text-xl tracking-wider pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sequi odio impedit accusantium minus.</h2>
                                <a href="register/"><button className='bg-green-600 hover:bg-green-400 transition text-white text-2xl border rounded-2xl mt-4 py-6 px-20 font-bold'>
                                    Sign Up
                                </button></a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* title end */}
            <hr className='border-1 border-slate-400' />
            {/* hero content */}
            <div className='px-20 bg-blue-50'>
                <div className='md:container md:mx-auto pt-16 pb-8 flex justify-center flex-wrap space-y-10 font-semibold tracking-tighter'>

                    <h1 className='text-center font-bold text-2xl md:text-4xl'>Watch Our Video to Discover <span className='font-extrabold'>How It Works</span></h1>
                    <div>
                        <iframe className='rounded-2xl h-40 sm:h-56 sm:w-96 md:h-96 md:w-150 lg:w-160'
                            src="https://www.youtube.com/embed/vB3Uwn4rG5I?si=-iYdtMnlZbsIsFGi">
                        </iframe>
                    </div>

                    <div className='md:grid md:grid-cols-3 gap-20 text-center'>
                        <div className='col-1 space-y-2'>
                            <h3 className='text-2xl font-bold tracking-wide'>Lorem ipsum dolor sit amet.</h3>
                            <hr />
                            <h4 className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo velit molestias et, explicabo fugiat, nobis cumque iusto excepturi asperiores accusamus est.
                            </h4>
                        </div>
                        <div className='col-1 space-y-2'>
                            <h3 className='text-2xl font-bold tracking-wide'>Lorem ipsum dolor sit amet.</h3>
                            <hr />
                            <h4 className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo velit molestias et, explicabo fugiat, nobis cumque iusto excepturi asperiores accusamus est.
                            </h4>
                        </div>
                        <div className='col-1 space-y-2'>
                            <h3 className='text-2xl font-bold tracking-wide'>Lorem ipsum dolor sit amet.</h3>
                            <hr />
                            <h4 className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo velit molestias et, explicabo fugiat, nobis cumque iusto excepturi asperiores accusamus est.
                            </h4>
                        </div>
                    </div>
                </div>
                <hr className='mt-10' />
            </div>
            {/* hero content end */}
            <hr className='border-1 border-slate-200' />
            {/* 2. content */}
            <div className='pb-16 bg-gradient-to-r from-slate-50 to-yellow-50'>
                <div className='py-6'>
                    <h1 className='text-center text-slate-600 text-5xl font-extrabold tracking-tighter pb-10'>Lorem ipsum dolor sit.</h1>
                    <div className="lg:grid lg:grid-cols-2">
                        <div className="col-1 pl-14">
                            <div className="grid grid-rows-3 bg-white">
                                <div className="row-1">
                                    <button className={`${contentBtnClass} ${btn1 && 'shadow-lg text-blue-500'}`}
                                        onClick={() => handleContent(0)} name='btn1'>
                                        Fully customize the structure of every page
                                        {btn1 ? <h1 className={`${subBtnContentClass}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, illo.</h1> : <div></div>}
                                    </button>

                                </div>
                                <div className="row-1">
                                    <button className={`${contentBtnClass} ${btn2 && 'shadow-lg text-blue-500'}`}
                                        onClick={() => handleContent(1)} name='btn2'>
                                        Style your site exactly the way you want
                                        {btn2 ? <h1 className={`${subBtnContentClass}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam voluptates ea amet dignissimos?</h1> : <></>}
                                    </button>

                                </div>
                                <div className="row-1">
                                    <button className={`${contentBtnClass} ${btn3 && 'shadow-lg text-blue-500'}`}
                                        onClick={() => handleContent(2)} name='btn3'>
                                        Create animations and interactions visually
                                        {btn3 ? <h1 className={`${subBtnContentClass}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit dolores ab. Enim ullam cumque voluptas? Excepturi, molestias!</h1> : <></>}
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="col-1">

                            <>
                                {btn1 && <><img className='h-full opacity-80 pt-5 lg:pt-0' src="https://images.pexels.com/photos/5792852/pexels-photo-5792852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></>}
                            </>

                            <>
                                {btn2 && <><img className='h-full opacity-90 pt-5 lg:pt-0' src="https://images.pexels.com/photos/3786748/pexels-photo-3786748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></>}
                            </>

                            <>
                                {btn3 && <><img className='h-full opacity-90 pt-5 lg:pt-0' src="https://images.pexels.com/photos/3207628/pexels-photo-3207628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></>}
                            </>

                        </div>
                    </div>
                </div>

            </div>
            {/* 2. content end */}
            <hr className='border-1 border-slate-200' />
            {/* testimonials start */}
            <Testimonials />
            {/* testimonials end */}

            {/* footer start */}
            <hr className='border-1 border-slate-400' />
            <Footer />
            {/* footer end */}

        </div >

    )
}

export default Home