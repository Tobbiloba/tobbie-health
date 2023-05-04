import logo from './img/png/no-bg.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
function Appointment() {
    return (
        <div className="bg-blue-600 flex flex-col lg:flex-row pb-6  px-6 lg:px-[7.5vw] pt-12 pb-10 md:px-[7vw] max-w-[100vw] overflow-x-hidden">
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
                            <input className='mb-4 h-[40px] outline-0 rounded-2xl pl-4 bg-blue-600 focus:text-slate-600 text-white border border-white focus:bg-white' />
                            <input className='mb-4 h-[40px] outline-0 rounded-2xl pl-4 bg-blue-600 focus:text-slate-600 text-white border border-white focus:bg-white' />
                            <input className='mb-4 h-[40px] outline-0 rounded-2xl pl-4 bg-blue-600 focus:text-slate-600 text-white border border-white focus:bg-white' />
                            <input className='mb-4 h-[40px] outline-0 rounded-2xl pl-4 bg-blue-600 focus:text-slate-600 text-white border border-white focus:bg-white' />
                        </div>
                    </div>
                    <button className='px-10 mt-4 rounded-3xl text-blue-600 bg-white py-2 border'>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Appointment;