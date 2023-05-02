// import AppsIcon from '@mui/icons-material/Apps';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import { useState, useEffect } from 'react';
// import logo from './img/png/no-bg.png';
// import Dropdown from './Dropdown';

// const Menu = (props) => {
//     // const [showMenu, setShowMenu] = useState(true);

//     const toggleMenu = () => {
//         setShowMenu(!showMenu);
//     };


//     const [showMenu, setShowMenu] = useState(true);

//     const handleNavClick = (event) => {
//         event.preventDefault();
//         const target = event.target.getAttribute('href');
//         props.handleScroll(target);
//     };

//     // const [borderText, setBorderText] = useState('');
//     // const sections = document.querySelectorAll('section[id]');

//     // useEffect(() => {
//     //     window.addEventListener('scroll', scrollActive);

//     //     return () => {
//     //         window.removeEventListener('scroll', scrollActive);
//     //     };
//     // }, []);

//     // const toggleNavMenu = () => {
//     //     setShowMenu(!showMenu);
//     // };

//     // const closeNavMenu = () => {
//     //     setShowMenu(false);
//     // };

//     // const linkAction = () => {
//     //     closeNavMenu();
//     // };

//     // const scrollActive = () => {
//     //     const scrollY = window.pageYOffset;

//     //     sections.forEach((current) => {
//     //         const sectionHeight = current.offsetHeight;
//     //         const sectionTop = current.offsetTop - 50;
//     //         const sectionId = current.getAttribute('id');

//     //         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//     //             setBorderText(sectionId);
//     //             document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.add('active');
//     //         } else {
//     //             document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.remove('active');
//     //         }
//     //     });
//     // };


//     return (
//         <div>
//             {/* mobile menu */}
//             <div className="flex flex-row justify-between items-center px-6 h-[120px] lg:hidden ">
//                 <div className="flex flex-row text-center">
//                     <img src={logo} alt="Logo" className="w-[100px] h-[80px]" />
//                     {/* <h1 className='border flex flex-col text-center text-xl font-bold text-slate-600'>Tobbie<br /><span className='font-bold text-2xl text-slate-700'>Health</span></h1> */}
//                 </div>
//                 <div>
//                     <AppsIcon
//                         style={{ color: 'white', fontSize: '52px', cursor: 'pointer' }}
//                         className={`border rounded-full p-2 hover:bg-white ${showMenu ? 'text-black' : ''}`}
//                         onClick={toggleMenu}
//                     />
//                 </div>
//             </div>


//             {showMenu &&
//                 // <div className='border border-white absolute bottom-0 min-h-[60vh] w-[100vw] transition ease-in-out delay-1000 '>
//                 //     <nav className={`nav__menu ${showMenu ? 'show' : ''}`}>
//                 //         <ul>
//                 //             <li>
//                 //                 <a href="" className="nav__link" onClick={linkAction}>
//                 //                     Section 1
//                 //                 </a>
//                 //             </li>
//                 //             <li>
//                 //                 <a href="" className="nav__link" onClick={linkAction}>
//                 //                     Section 2
//                 //                 </a>
//                 //             </li>
//                 //             <li>
//                 //                 <a href="" className="nav__link" onClick={linkAction}>
//                 //                     Section 3
//                 //                 </a>
//                 //             </li>
//                 //         </ul>
//                 //     </nav>
//                 // </div>
//                 <div className='flex flex-col  justify-between absolute bottom-0 min-h-[60vh] w-[100vw] pb-12 transition ease-in-out delay-1000 backdrop-brightness-50 bg-white/50'>
//                     <div className='flex item-center justify-center backdrop-brightness-50 bg-white/50 cursor-pointer'>
//                         <ArrowBackIosNewIcon className='-rotate-90 py-1' style={{ color: 'white', fontSize: '42px' }} />
//                     </div>
//                     <div className='border border-red-500 flex flex-col text-center text-white gap-4'>
//                         <a href="#home" className={props.activeSection === 'home' ? 'text-4xl border border-white' : 'text-xl'} onClick={handleNavClick}>Home</a>
//                         <a href="#about" className={props.activeSection === 'about' ? 'active' : ''} onClick={handleNavClick}>About Us</a>
//                         <a href="#specialists" className={props.activeSection === 'specialists' ? 'active' : ''} onClick={handleNavClick}>Specialists</a>
//                         <a href="#doctors" className={props.activeSection === 'doctors' ? 'active' : ''} onClick={handleNavClick}>Doctors</a>
//                         <a href="#prices" className={props.activeSection === 'prices' ? 'active' : ''} onClick={handleNavClick}>Prices</a>
//                         <a href="#prices" className={props.activeSection === 'contact' ? 'active' : ''} onClick={handleNavClick}>Contact</a>
//                     </div>
//                     <div className='flex flex-row justify-evenly'>
//                         <Dropdown />
//                         <button className='border py-2 px-5 rounded-2xl cursor-pointer'>+234 70 8455 7988 <ArrowRightAltIcon /></button>
//                     </div>
//                 </div>

//             }
//         </div>
//     );
// };

// export default Menu;


import AppsIcon from '@mui/icons-material/Apps';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState, useEffect } from 'react';
import logo from './img/png/no-bg.png';
import Dropdown from './Dropdown';

const Menu = (props) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleNavClick = (event) => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        props.handleScroll(target);
    };

    return (
        <div>
            {/* mobile menu */}
            <div className="flex flex-row justify-between px-6 items-center h-[120px] lg:hidden ">
                <div className="flex flex-row text-center">
                    <img src={logo} alt="Logo" className="w-[100px] h-[80px]" />
                </div>
                {!showMenu && <div>
                    <AppsIcon
                        style={{ color: 'white', fontSize: '52px', cursor: 'pointer' }}
                        className={`border rounded-full p-2 hover:bg-white ${showMenu ? 'text-black' : ''}`}
                        onClick={toggleMenu}
                    />
                </div>}

                {/* </div> */}
                {/* <div className='flex lg::'> */}
                {showMenu && (
                    <div className="flex flex-col lg:hidden justify-between fixed top-0 left-0 min-h-[100vh] w-[80vw] pb-12 transition ease-in-out delay-1000 backdrop-brightness-50 bg-white/50">
                        <div className="flex item-center justify-end px-3 backdrop-brightness-50 bg-white/50 cursor-pointer" onClick={toggleMenu}>
                            <ArrowBackIosNewIcon className=" py-1" style={{ color: 'white', fontSize: '42px' }} />
                        </div>
                        <div className="border border-red-500 flex flex-col text-center items-center justify-center text-white gap-4">
                            <a href="#home" className={props.activeSection === 'home' ? 'text-3xl border w-fit px-4 py-2 bg-slate-500 rounded-2xl border-white' : 'text-xl'} onClick={handleNavClick}>Home</a>
                            <a href="#about" className={props.activeSection === 'about' ? 'text-3xl border w-fit px-4 py-2 bg-slate-500 rounded-2xl border-white' : 'text-xl'} onClick={handleNavClick}>About Us</a>
                            <a href="#specialists" className={props.activeSection === 'specialists' ? 'active' : ''} onClick={handleNavClick}>Specialists</a>
                            <a href="#doctors" className={props.activeSection === 'doctors' ? 'active' : ''} onClick={handleNavClick}>Doctors</a>
                            <a href="#prices" className={props.activeSection === 'prices' ? 'active' : ''} onClick={handleNavClick}>Prices</a>
                            <a href="#contact" className={props.activeSection === 'contact' ? 'active' : ''} onClick={handleNavClick}>Contact Us</a>
                        </div>
                        <div className='flex flex-row justify-evenly'>
                            <Dropdown />
                            <button className='border py-2 px-5 rounded-2xl cursor-pointer'>+234 70 8455 7988 <ArrowRightAltIcon /></button>
                        </div>
                    </div>
                )}
            </div>


            {/* Web View Menu */}
            <div className='hidden lg:flex lg:flex-row lg:justify-between border px-[7.5vw] w-[100vw] py-3'>
                <div className='flex'>
                    <img src={logo} alt="Logo" className="w-[70px] h-[50px]" />
                </div>
                <div className='flex items-center justify-center'>
                    <AppsIcon
                        style={{ color: 'white', fontSize: '56px', cursor: 'pointer' }}
                        className={`border rounded-full p-2 mr-6 hover:bg-white ${showMenu ? 'text-black' : ''}`}
                        onClick={toggleMenu}
                    />
                    <div className='flex justify-center items-center'>
                        <a href="#home" className={props.activeSection === 'home' ? ' mr-4 w-fit px-2 py-1 text-white bg-blue-500 h-fit rounded-2xl' : 'text-white  mr-4'} onClick={handleNavClick}>Home</a>
                        <a href="#about" className={props.activeSection === 'about' ? ' mr-3 w-fit px-2 py-1 text-white bg-blue-500 h-fit rounded-2xl' : 'text-white  mr-4'} onClick={handleNavClick}>About Us</a>
                        <a href="#specialists" className={props.activeSection === 'specialists' ? ' mr-3 w-fit px-2 py-1 text-white bg-blue-500 h-fit rounded-2xl' : 'text-white  mr-4'} onClick={handleNavClick}>Specialists</a>
                        <a href="#doctors" className={props.activeSection === 'doctors' ? ' mr-3 w-fit px-2 py-1 text-white bg-blue-500 h-fit rounded-2xl' : 'text-white  mr-4'} onClick={handleNavClick}>Doctors</a>
                        <a href="#prices" className={props.activeSection === 'prices' ? ' mr-3 w-fit px-2 py-1 text-white bg-blue-500 h-fit rounded-2xl' : 'text-white  mr-4'} onClick={handleNavClick}>Prices</a>
                        <a href="#contact" className={props.activeSection === 'contact' ? ' mr-3 w-fit px-2 py-1 text-white bg-blue-500 h-fit rounded-2xl' : 'text-white  mr-4'} onClick={handleNavClick}>Contact Us</a>
                    </div>
                </div>
                <div className='flex'>
                    <Dropdown />
                    <button className='border border-slate-400 py-2 px-4 rounded-2xl cursor-pointer text-white ml-4'>+234 70 8455 7988 <ArrowRightAltIcon /></button>
                </div>
            </div>


        </div>
    );
};

export default Menu;