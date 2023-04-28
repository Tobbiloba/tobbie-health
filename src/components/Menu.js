import AppsIcon from '@mui/icons-material/Apps';
import { useState } from 'react';
import logo from './img/png/no-bg.png'
const Menu = () => {

    return (
        <div>
            {/* mobile menu */}
            <div>
                <div>
                    <img src={logo} style={{ color: 'white' }} />
                </div>
                <div>
                    <AppsIcon />
                </div>
            </div>
        </div>
    )
}
export default Menu;