import logo from './img/png/no-bg.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dropdown from './Dropdown';

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// import DatePicker from "react-datepicker";



function Appointment() {
    const [date, setDate] = useState(new Date());
    // const [spec, setSpec] = useState('');
    const specializations = [
        {
            id: 1,
            option: 'option1'
        },
        {
            id: 2,
            option: 'option2'
        },
        {
            id: 3,
            option: 'option3'
        },
        {
            id: 4,
            option: 'option4'
        },
    ];

    // const specCHange = (event) => {
    //     setSpec(event.target.value);
    // };

    return (
        <div className="bg-blue-600 flex flex-col lg:flex-row   px-6 lg:px-[7.5vw] pt-12 pb-10 md:px-[7vw] max-w-[100vw] overflow-x-hidden">
            <div>
                <img src={logo} alt="Logo" className="w-[70px] h-[50px]" />
            </div>
            <div className=' mt-12'>
                <div>
                    <div className='text-white font-bold font-mono text-center flex justify-center'>
                        <h1>Make an appointment with a doctor</h1>
                    </div>
                    <div className='hidden'>
                        <ArrowRightIcon />
                    </div>
                </div>
                <div className=' mt-8'>
                    <div>
                        <div className='text-[14px] text-white flex justify-center font-bold font-mono'>
                            <h1>About yourself</h1>
                        </div>
                        <div className=' flex flex-col mt-4 justify-center'>
                            <input placeholder='Full name' className='mb-4 h-[40px] outline-0 rounded-2xl pl-4 bg-blue-600 focus:text-slate-600 text-white border border-white focus:bg-white' />
                            <input placeholder='+234' className='mb-4 h-[40px] outline-0 rounded-2xl pl-4 bg-blue-600 focus:text-slate-600 text-white border border-white focus:bg-white' />
                            <input placeholder='Enter your e-mail address' className='mb-4 h-[40px] outline-0 rounded-2xl pl-4 bg-blue-600 focus:text-slate-600 text-white border border-white focus:bg-white' />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='text-[14px] text-white flex justify-center font-bold font-mono'>
                            <h1>Admission data</h1>
                        </div>
                        <div className=' flex flex-col mt-4 justify-center'>
                            {/* <div>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Overflow of specialization</InputLabel>
                                    <Select
                                        // labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={spec}
                                        label="Age"
                                        onChange={specChan}
                                    >
                                        <MenuItem value={10}>Opthamology</MenuItem>
                                        <MenuItem value={20}>Oncologist</MenuItem>
                                        <MenuItem value={30}>Surgeon</MenuItem>
                                    </Select>
                                </FormControl>

                            </div> */}

                            <div className='mb-4'>
                                <Dropdown name='Overview of specialization' options={specializations} className='text-white' />
                            </div>
                            <div className='text-white mb-4'>
                                <Dropdown name='Checkout the Expert' options={specializations} />
                            </div>

                            {/* <input className='mb-4 h-[40px] outline-0 rounded-2xl pl-4 bg-blue-600 focus:text-slate-600 text-white border border-white focus:bg-white' /> */}
                            {/* <input className='mb-4 h-[40px] outline-0 rounded-2xl pl-4 bg-blue-600 focus:text-slate-600 text-white border border-white focus:bg-white' /> */}
                            <div>
                                <DatePicker selected={date} onChange={(date) => setDate(date)} className='px-3 font-mono font-bold h-[40px]' />
                            </div>
                            <input className='mb-4 mt-4 h-[40px] w-[150px] outline-0 rounded-2xl pl-4 bg-blue-600 focus:text-slate-600 text-white border border-white focus:bg-white' placeholder='Time' />
                        </div>
                    </div>
                    <button className='px-10 mt-4 rounded-3xl text-blue-600 bg-white py-2 border'>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Appointment;