import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
function Gallery() {
    return (
        <div className='bg-slate-200 flex flex-col px-6 lg:px-[7.5vw] pt-12 pb-10'>
            <div className='border'>
                <div className='text-2xl font-bold text-slate-600 flex justify-center'>
                    <h1>Gallery</h1>
                </div>
                <div className=' mt-6'>
                    <h1 className='text-[16px] flex text-center justify-center font-bold'>Check out our clinic great gallery</h1>
                    <div className='mt-4 flex flex-wrap'>
                        <h1 className='border border-white py-2 px-5 mr-2 rounded-3xl text-slate-800 mt-3'>#Clinic</h1>
                        <h1 className='border border-white py-2 px-5 mr-2 rounded-3xl text-slate-800 mt-3'>#Opthamology</h1>
                        <h1 className='border border-white py-2 px-5 mr-2 rounded-3xl text-slate-800 mt-3'>#Surgery</h1>
                        <h1 className='border border-white py-2 px-5 mr-2 rounded-3xl text-slate-800 mt-3'>#Truthfulness</h1>
                        <h1 className='border border-white py-2 px-5 mr-2 rounded-3xl text-slate-800 mt-3'>#Trust</h1>
                    </div>
                </div>
                <div className=' mt-6'>
                    <div className='flex flex-row justify-evenly'>
                        <TelegramIcon style={{ color: 'white', fontSize: '50px' }} className='p-2 rounded-full bg-blue-300' />
                        <TwitterIcon style={{ color: 'white', fontSize: '50px' }} className='p-2 rounded-full bg-blue-500' />
                        <FacebookIcon style={{ color: 'white', fontSize: '50px' }} className='p-2 rounded-full bg-blue-600' />
                        <WhatsAppIcon style={{ color: 'white', fontSize: '50px' }} className='p-2 rounded-full bg-green-500' />
                    </div>
                    {/* <ArrowRightIcon /> */}
                </div>
            </div>
            <div className='mt-8 flex flex-col text-center'>
                <div className=''>
                    <img src="https://post.healthline.com/wp-content/uploads/2021/04/Girl-visiting-pediatric-optometrist-732x549-thumbnail.jpg" className='h-[350px]' />
                    <h1 className='font-bold mt-3'>01 <span className='font-normal text-slate-400'>/</span> Selection of lenses</h1>
                    <p className='mt-2 text-[16px] text-slate-400'>The girl got a 50% discount</p>
                </div>
                <div>

                </div>
                <div className='mt-5'>
                    <img src="https://www.kitsapeye.com/img/exam/vision_exam2.jpg" className='h-[350px]' />
                    <h1 className='font-bold mt-3'>02 <span className='font-normal text-slate-400'>/</span> Correction</h1>
                    <p className='mt-2 text-[16px] text-slate-400'>First time at our clinic</p>
                </div>
                <div className='mt-5'>
                    <img src="https://backend-uk.essilor.co.uk/var/essilor/storage/images/3/7/3/5/645373-1-eng-GB/woman-having-an-oct-scan.jpg" className='h-[350px]' />
                    <h1 className='font-bold mt-3'>03 <span className='font-normal text-slate-400'>/</span> Equipment</h1>
                    <p className='mt-2 text-[16px] text-slate-400'>Behind the standards of EU</p>
                </div>
            </div>
        </div>
    )
}
export default Gallery;