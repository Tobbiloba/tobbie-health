import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function AboutUs() {
    return (
        <div className="w-[100vw]  bg-white flex flex-col px-6 lg:px-[7.5vw] pt-16">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:items-start text-center  lg:mt-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-600">About Us</h1>
                </div>
                <div className='lg:flex flex-col lg:w-[30vw] '>
                    <h1 className="text-3xl font-mono mt-5 font-bold">Opthamology <br /> clinic Vigen.</h1>
                    <p className="font-normal text-xl mt-7 text-slate-500">The modern Vigen, Opthamology CLinic is one of the 5 top level clinics of the European Union</p>
                    <button className="mt-5 py-3 border px-10 rounded-3xl bg-blue-600 text-white">Learn More</button>

                </div>
                <div className="mt-12">
                    <img src="https://s3-prod.modernhealthcare.com/s3fs-public/styles/800x600/public/NEWS_180219951_AR_0_LZPHZNGBWJJQ.jpg" />
                </div>
            </div>

            <div className='flex flex-col-reverse lg:flex-row mt-16  items-center lg:justify-between lg:items-start pb-12'>
                <button className='border w-fit py-5 mt-12 rounded-full px-5'><ArrowRightAltIcon /></button>
                <div className='flex flex-col-reverse lg:flex-row lg:justify-between  lg:w-[70vw]'>
                    <div className='flex w-full flex-col-reverse lg:flex-col mt-4 lg:mt-0 mr-8 text-center  lg:justify-between'>
                        <div className='overflow-hidden flex justify-end lg:justify-start'>
                            <ArrowRightIcon className='rotate-[45deg] lg:rotate-[-135deg]' />
                        </div>

                        <h1 className='lg:w-[13vw] text-xl text-slate-600 font-bold text-left'>Laser vision correction of a complexity at a fixed price.</h1>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='border mb-16 px-2 border-white border-b-slate-500'>
                            <h1 className='text-2xl font-bold text-slate-700'>01</h1>
                            <p className='mt-4 font-bold'>We use modern <br />equipment</p>
                        </div>
                        <div className='border mb-16 px-2 border-white border-b-slate-500'>
                            <h1 className='text-2xl font-bold text-slate-700'>02</h1>
                            <p className='mt-4 font-bold'>The result surpasses all expectations</p>
                        </div>
                        <div className='border mb-16 px-2 border-white border-b-slate-500'>
                            <h1 className='text-2xl font-bold text-slate-700'>03</h1>
                            <p className='mt-4 font-bold'>We have the best professionals working</p>
                        </div>
                        <div className='border mb-16 px-2 border-white border-b-slate-500'>
                            <h1 className='text-2xl font-bold text-slate-700'>04</h1>
                            <p className='mt-4 font-bold'>We train our own specialists</p>
                        </div>
                        <div className='border mb-16 px-2 border-white border-b-slate-500'>
                            <h1 className='text-2xl font-bold text-slate-700'>05</h1>
                            <p className='mt-4 font-bold'>Individual contract with the client</p>
                        </div>
                        <div className='border mb-16 px-2 border-white border-b-slate-500'>
                            <h1 className='text-2xl font-bold text-slate-700'>06</h1>
                            <p className='mt-4 font-bold'>We have the European certifications</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AboutUs;