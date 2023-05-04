import VideoBackground from "./VideoBackground";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const HomePage = () => {
    return (
        <div className="min-h-[100vh] max-w-[100vw] px-6 overflow-x-hidden lg:px-[7.5vw] md:px-[7vw]">
            <VideoBackground />
            <div className="flex flex-col lg:justify-between lg:items-center pr-8 lg:flex-row pt-6 lg:mt-40 ">
                <h1 className="text-4xl font-bold flex lg:w-[50vw] lg:text-6xl font-sans lg:text-white lg:font-normal lg:leading-[90px] leading-[49px] text-slate-300">Over a long period of work we have provided hundreds of thousands of eye care services</h1>
                <div className="flex flex-col mt-8">
                    <AvatarGroup max={5} className="w-fit  flex justify-start">
                        <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdd7vPRNLgPIDeWNP3WkSnjFfVj5quhQWHDQ&usqp=CAU" />
                        <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaPtfg1Ywdhf1Jw-NJVqHixTURHQv2mLoWg&usqp=CAU" />
                        <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMyV-r0tK0R5e-gnNS5bdE5u5Azemz1syzFA&usqp=CAU" />
                        <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbe05syvsOdVS8cn7fscM1XCX3oQ1avRYHPw&usqp=CAU" />
                        <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuk3D_loIN_VixbcY1x3mJyQYxhaBwqIaXMA&usqp=CAU" />
                    </AvatarGroup>
                    <div className="text-white font-bold  mt-4">
                        <h1 className="text-2xl">100k+</h1>
                        <p className="text-slate-300 text-xl">Satisfied Customers</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-col lg:flex-row lg:mt-40 lg:justify-between lg:">
                <div className="flex flex-row justify-between lg:w-[450px] h-fit overflow-hidden md:w-[50vw]">
                    <div className="flex justify-between flex-col lg:mr-[5vw]">
                        <h1 className="font-bold text-white text-xl lg:text-2xl">Facts</h1>
                        <ArrowRightIcon className="rotate-[135deg] relative top-5 right-5" style={{ color: 'white', fontSize: '52px' }} />
                    </div>
                    <div className="ml-6">
                        <h1 className="text-[16px] font-bold text-white lg:text-xl">Premium equipment that meets the state-of-the-art in the opthamology market</h1>
                        <div className="border my-4"></div>
                        <h1 className="text-[16px] font-bold lg:text-xl text-white">Professionals in their field, who can be trusted and get the best results.</h1>
                    </div>
                </div>
                <div className="bg-blue-600 md:w-fit mt-12 lg:mt-0 flex flex-col p-3 lg:h-[100%] lg:w-[450px] overflow-hidden">
                    <div className="flex flex-row text-white">
                        <h1 className="lg:text-xl lg:leading-[40px] lg:font-bold">Take the discount for the first visit of an opthalmologist</h1>
                        <ArrowRightIcon className="rotate-[-45deg] relative bottom-4 left-4 w-fit" style={{ color: 'white', fontSize: '52px' }} />
                    </div>
                    <div className="flex flex-row mt-12 justify-between items-center">
                        <h1 className="text-white text-xl lg:text-3xl font-bold">20%</h1>
                        <button className="text-black bg-white border rounded-3xl p-2">Make an appointment</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default HomePage;