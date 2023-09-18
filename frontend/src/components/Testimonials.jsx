import React from 'react'

const Testimonials = () => {
    return (
        <>
            <section className="bg-slate-100 dark:bg-gray-900">
                <hr />
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold dark:text-white text-slate-600">Testimonials</h2>
                        <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                    </div>
                    <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3>
                                <p className="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>

                            </blockquote>
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Bonnie Green</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                            </div>
                        </figure>
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>

                                <p className="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
                            </blockquote>
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Roberta Casas</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                            </div>
                        </figure>
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow and variants</h3>
                                <p className="my-4">"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.</p>

                            </blockquote>
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Jese Leos</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                            </div>
                        </figure>
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                                <p className="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
                            </blockquote>
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Joseph McFall</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
                            </div>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials