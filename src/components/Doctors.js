import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const doc = [
    {
        id: 1,
        name: "Dr Shaun Murphy",
        experience: "4",
        specialities: ['surgeon', 'Oncologist', 'Senior residence'],
        img: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzNTYyMTI4MTEwNTkzNDc1/freddie-highmore-as-dr-shaun-murphy-in-the-abc-series-the-good-doctor.jpg'
    },
    {
        id: 2,
        name: "Dr Claire Brown",
        experience: "4",
        specialities: ['surgeon', 'Oncologist', 'Senior residence'],
        img: 'https://www.looper.com/img/gallery/the-real-reason-dr-browne-wont-be-returning-to-the-good-doctor/l-intro-1643235471.jpg'
    },
    {
        id: 3,
        name: "Dr Morgan Reznick",
        experience: "7",
        specialities: ['Opthamologist', 'PhD', 'Head of department'],
        img: 'https://media.distractify.com/brand-img/Ob0T5jRfY/0x0/morgan-the-good-doctor-1653351922753.jpg'
    },
    {
        id: 4,
        name: "Dr Alex Park",
        experience: "14",
        specialities: ['surgeon', 'Oncologist', 'Chief doctor'],
        img: 'https://cdn.images.express.co.uk/img/dynamic/20/750x445/1174879.jpg'
    },
    {
        id: 5,
        name: "Dr Asher Wolke",
        experience: "2",
        specialities: ['Opthamologist', 'Intern'],
        img: 'https://m.media-amazon.com/images/M/MV5BNTMzNGNjOGEtYTNlNC00Mjg3LTlhMWUtZGQ1NzM2YTZjMDc0XkEyXkFqcGdeQXVyNDg4ODIzNDU@._V1_.jpg'
    },
    {
        id: 7,
        name: "Dr Jared Kalu",
        experience: "4",
        specialities: ["Children's Opthamologist", 'intern', 'Junior residence'],
        img: 'https://aisvox-a.akamaihd.net/masters/1048343/chuku-modu-spielt-in-the-good-doctor-dr-jared-kalu.jpg'
    }
]
function Doctors() {
    return (
        <div className="bg-white flex flex-col lg:flex-row  px-6 lg:px-[7.5vw] pt-12 pb-10 md:px-[7vw] max-w-[100vw] overflow-x-hidden">
            <div className=" text-2xl font-bold text-slate-600 flex justify-center">
                <h1>Doctors</h1>
            </div>
            <div className=' lg:w-fit lg:ml-[5.2vw]'>
                <div className=''>
                    <div >
                        <h1 className='text-[16px]  lg:w-[415px] flex text-center leading-4 lg:font-medium justify-center font-bold lg:text-5xl lg:text-slate-500 lg:justify-normal lg:text-left '>Surgeons and opthamologists</h1>
                        <h1 className="mt-4 text-[12px] justify-center flex text-center lg:mt-6 lg:text-[17px] font-bold lg:text-slate-600 lg:w-[250px] lg:text-left lg:justify-start">Our clinic employs only professional physicians. We select the best doctors on a regular basis</h1>
                    </div>
                    <div className="mt-12 flex item-center justify-center lg:hidden">
                        <button className="border px-6 py-12 rounded-full">All doctors <ArrowRightAltIcon className='ml-2' /></button>
                    </div>
                </div>
                <div className='mt-8'>
                    {/* lg:grid lg:grid-cols-3 lg:gap-[4.25vw] */}
                    <div className='flex flex-wrap '>
                        {doc.map((doctor) => (
                            <div key={doctor.id} className='mt-6 md:w-[330px] lg:w-[430px] md:mr-4'>
                                {doctor.img && <img src={doctor.img} className='h-[250px] rounded-2xl w-screen md:w-[340px] md:h-[320px] lg:w-[440px] lg:h-[380px]' alt={doctor.name} />}
                                <h2 className='mt-4 text-xl font-bold'>{doctor.name}</h2>
                                <p className='text-slate-500 mt-2'>Work experience - {doctor.experience} years</p>
                                {/* <p>Specialities:</p> */}
                                <ul className='flex flex-wrap mt-2'>
                                    {doctor.specialities.map((speciality, index) => (
                                        <li key={index} className='border py-2 px-4 mr-4 md:mr-2 mt-3 rounded-2xl text-slate-600'>{speciality}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Doctors;