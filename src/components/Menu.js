// import AppsIcon from '@mui/icons-material/Apps';
// import { useState } from 'react';
// import logo from './img/png/no-bg.png'
// const Menu = () => {
//     const [showMenu, setShowMenu] = useState(false);

//     function menu() {
//         setShowMenu  = !showMenu
//     }

//     return (
//         <div>
//             {/* mobile menu */}
//             <div className='flex flex-row justify-between items-center px-6 h-[120px] border lg:hidden'>
//                 <div className='flex flex-row text-center'>
//                     <img src={logo} style={{ color: 'white' }} className='w-[100px] h-[80px]' />
//                     {/* <h1 className='border flex flex-col text-center text-xl font-bold text-slate-600'>Tobbie<br /><span className='font-bold text-2xl text-slate-700'>Health</span></h1> */}
//                 </div>
//                 <div>
//                     <AppsIcon style={{ color: 'white', fontSize: '62px', ':hover': { color: 'black' } }} className='border rounded-full p-2 hover:bg-white cursor-pointer' onClick={menu}/>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Menu;


import AppsIcon from '@mui/icons-material/Apps';
import { useState } from 'react';
import logo from './img/png/no-bg.png';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            {/* mobile menu */}
            <div className="flex flex-row justify-between items-center px-6 h-[120px] border lg:hidden">
                <div className="flex flex-row text-center">
                    <img src={logo} alt="Logo" className="w-[100px] h-[80px]" />
                    {/* <h1 className='border flex flex-col text-center text-xl font-bold text-slate-600'>Tobbie<br /><span className='font-bold text-2xl text-slate-700'>Health</span></h1> */}
                </div>
                <div>
                    <AppsIcon
                        style={{ color: 'white', fontSize: '52px', cursor: 'pointer' }}
                        className={`border rounded-full p-2 hover:bg-white ${showMenu ? 'text-black' : ''}`}
                        onClick={toggleMenu}
                    />
                </div>
            </div>
        </div>
    );
};

export default Menu;
