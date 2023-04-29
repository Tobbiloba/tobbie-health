// import Menu from "./Menu";
import VideoBackground from "./VideoBackground";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const HomePage = () => {
    return (
        <div className="min-h-[100vh] w-[100vw] px-8">
            <VideoBackground />
            {/* <Menu /> */}
            <div className="flex flex-col lg:flex-row pt-6">
                <h1 className="text-4xl font-bold flex leading-[49px] text-slate-300">Over a long period of work we have provided hundreds of thousands of eye care services</h1>
                <div className="flex flex-col mt-6">
                    <AvatarGroup max={5} className="w-fit  flex justify-start">
                        <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdd7vPRNLgPIDeWNP3WkSnjFfVj5quhQWHDQ&usqp=CAU" />
                        <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaPtfg1Ywdhf1Jw-NJVqHixTURHQv2mLoWg&usqp=CAU" />
                        <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMyV-r0tK0R5e-gnNS5bdE5u5Azemz1syzFA&usqp=CAU" />
                        <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbe05syvsOdVS8cn7fscM1XCX3oQ1avRYHPw&usqp=CAU" />
                        <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuk3D_loIN_VixbcY1x3mJyQYxhaBwqIaXMA&usqp=CAU" />
                    </AvatarGroup>
                    <div className="text-white font-bold  mt-3">
                        <h1 className="text-2xl">100k+</h1>
                        <p className="text-slate-300 text-xl">Satisfied Customers</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>

    )
}
export default HomePage;