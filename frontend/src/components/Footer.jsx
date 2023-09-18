import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-t from-gray-700 to-slate-600">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="/" className="items-center">
                                <span className="rounded-lg p-2 self-center text-2xl whitespace-nowrap bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent font-bold hover:from-blue-300 hover:to-blue-400 transition">LangLex</span>
                            </a>
                        </div>
                        <div className="md:grid md:grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                                <ul className="text-white dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com/savascem" className="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/cemsavas/" className="hover:underline">Linkedin</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                                <ul className="text-white dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://www.linkedin.com/in/cemsavas/" className="hover:underline">Cem Savaş</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">

                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">

                                <span className="sr-only">Discord community</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">

                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">

                                <span className="sr-only">GitHub account</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">

                                <span className="sr-only">Dribbble account</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer