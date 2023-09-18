import React, { useEffect, PureComponent } from 'react'
import { LineChart, BarChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend, PieChart, Pie, Cell, Label } from 'recharts';


const Describe = ({ data, mainProfile, user }) => {

    const today = new Date();

    const checkLast = () => {
        if (data && data.length > 0) {
            const lastItem = data[data.length - 1];

            if (lastItem && lastItem.day && lastItem.month && lastItem.year) {

                if (
                    today.getDate() === lastItem.day &&
                    today.getMonth() + 1 === lastItem.month &&
                    today.getFullYear() === lastItem.year
                ) {
                    return true;
                } else {
                    return false;
                }

            } else {
                return false;
            }

        } else {
            return false;
        }
    }

    const durationOfMembership = () => {

        const date1 = new Date(mainProfile.created_at);

        const timeDifference = today - date1;

        const dayDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));

        return dayDifference;
    }


    const calculateWords = () => {
        let rest = mainProfile.daily_goal - data[data.length - 1].words.length;
        return rest;
    };

    const chart1 = () => {
        let arr = [];
        data.map(item => (
            arr.push({ name: `${item.day}/${item.month}/${item.year}`, uv: item.words.length, pv: 2400, amt: 2400 })
        ));
        return arr;
    };

    const chart2 = () => {
        let finished = 0;

        data.map(item => {
            if (item.words.length === mainProfile.daily_goal || item.words.length > mainProfile.daily_goal) {
                finished++;
            }
        });
        let notFinished = durationOfMembership() - finished;
        let arr = [
            { name: 'Finished', value: finished },
            { name: 'Not Finished', value: notFinished },
        ];
        return arr;
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#ffff",
                        padding: "5px",
                        border: "1px solid #cccc"
                    }}
                >
                    <label>{`${payload[0].name} : ${payload[0].value}`}</label>
                </div>
            );
        }
    }

    const COLORS = ['#00C49F', '#FFBB28'];

    const chart1Data = chart1();

    const totalWord = () => {
        let total = 0;
        chart1Data.map(item => {
            total += item.uv;
        });
        return total;
    }

    const chart2Data = chart2();

    return (
        <div className=''>
            <h1 className='pb-6 text-3xl font-semibold'>Home - Dashboard</h1>
            <div className="lg:grid lg:grid-cols-3 gap-6 space-y-2 lg:space-y-0">
                <div className='col-span-1 border rounded-lg bg-white shadow-md p-5 space-y-3 hover:bg-blue-50'>
                    <h1 className='text-xl text-slate-700'>Welcome <span className='font-bold text-slate-800'>{mainProfile.first_name ? `${mainProfile.first_name}` : `${user.user}`}</span></h1>
                    <h2 className='text-lg text-slate-500'>{

                        checkLast() ?

                            `Today you add ${data[data.length - 1].words.length} words. Add ${calculateWords()} words for reach your daily goal.`

                            :

                            "Today, you don't add any new word. Go to Rourine page and add new words."

                    }</h2>

                    {/* pie graph start */}
                    <div>
                        <hr />
                        <div className='p-3 flex flex-wrap justify-center space-y-6'>

                            <h1 className='text-slate-400 text-md'>The following chart displays the completion rate of daily learning goals. Achieving your daily goals is important for the sustainability of the learning process.</h1>

                            <PieChart width={200} height={200} className='' >

                                <Pie
                                    data={chart2Data}
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    cx="50%"
                                    cy="50%"
                                    dataKey="value"
                                    nameKey="name"
                                >
                                    {chart2Data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}

                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                            </PieChart>
                            <div className=' w-full flex justify-center'>
                                <div className='space-y-1'>
                                    <h1 className='text-green-600 font-semibold flex'><div className='w-4 border-8 px-1 bg-green-500 border-green-500 rounded-sm mr-2'></div> <span>{chart2Data[0].name} : {chart2Data[0].value} Days</span></h1>
                                    <h1 className='text-yellow-500 font-semibold flex'><div className='w-4 border-8 px-1 bg-yellow-400 border-yellow-400 rounded-sm mr-2'></div> <span>{chart2Data[1].name} : {chart2Data[1].value} Days</span></h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* pie graph end */}
                </div>


                <div className='col-span-2 border rounded-lg bg-white shadow-md p-5 hover:bg-green-50 flex flex-wrap items-center'>
                    <div className='text-center space-y-1 w-full'>
                        <h1 className='text-xl text-slate-700'>Your membership date: <span className='font-bold'>{mainProfile && mainProfile.created_at.substring(0, 10)}</span></h1>

                    </div>
                    <div className='md:grid md:grid-cols-3 space-y-3 pb-2 md:pb-8'>
                        <h1 className='col-span-3 text-3xl text-slate-500 font-bold tracking-wider text-center pb-4'>Statistics</h1>
                        <div className="col-span-1 text-center px-2 space-y-3">
                            <h1 className='text-xl font-light tracking-wider'>Duration of your membership (day)</h1>
                            <h2 className='text-6xl font-bold text-blue-400'>{durationOfMembership()}</h2>
                        </div>
                        <div className="col-span-1 text-center px-2 space-y-3">
                            <h1 className='text-xl font-light tracking-wider'>Number of total words added by you</h1>
                            <h2 className='text-6xl font-bold text-blue-400'>{totalWord()}</h2>
                        </div>
                        <div className="col-span-1 text-center px-2 space-y-3">
                            <h1 className='text-xl font-light tracking-wider'>Your Daily Goal</h1>
                            <h2 className='text-6xl font-bold text-blue-400'>{mainProfile.daily_goal}</h2>
                        </div>
                        <div className="col-span-1 text-center px-2 space-y-3">
                            <h1 className='text-xl font-light tracking-wider'>Number of added words per day</h1>
                            <h2 className='text-6xl font-bold text-blue-400'>{(totalWord() / durationOfMembership()).toFixed(2)}</h2>
                        </div>
                        <div className="col-span-1 text-center px-2 space-y-3">
                            <h1 className='text-xl font-light tracking-wider'>How many days you didn't add new words</h1>
                            <h2 className='text-6xl font-bold text-blue-400'>{data.length}</h2>
                        </div>
                        <div className="col-span-1 text-center px-2 space-y-3">
                            <h1 className='text-xl font-light tracking-wider'>Continuity percentage</h1>
                            <h2 className='text-6xl font-bold text-blue-400'>{(data.length / durationOfMembership()).toFixed(2)}</h2>
                        </div>
                    </div>
                </div>


                <div className='col-span-3 border rounded-lg bg-white shadow-md p-6 space-y-4 flex items-center flex-wrap hover:bg-yellow-50'>
                    <h1 className='text-center text-xl font-bold text-slate-600 tracking-wider w-full'>Daily Added Word Graph
                        <h2 className='text-lg tracking-tight font-thin'>In the following chart, the total number of words added daily is displayed as a bar graph.</h2></h1>
                    <div className='flex bg-slate-100 xl:bg-white w-full flex-wrap'>
                        <div className='flex w-full text-center'>
                            <h1 className="w-full visible xl:invisible">
                                If you want to display the chart, please get full screen to your window.
                            </h1>
                        </div>
                        <div className="w-full invisible xl:visible ">
                            <BarChart width={960} height={300} data={chart1Data}>
                                <XAxis dataKey="name" stroke="#8884d8" />
                                <YAxis />
                                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                            </BarChart>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Describe