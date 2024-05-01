import './Header.css'

import logoblue from '../../assets/logo-blue.png'
import logopink from '../../assets/logo-pink.png'

export function Header() {
    return (
        <header>
            <div className='logo'>
                <img src={logoblue} width='115'/>
            </div>
        </header>
    );
};