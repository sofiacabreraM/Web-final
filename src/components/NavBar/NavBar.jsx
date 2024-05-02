import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';
import Logo from '../../../public/imgs/Logo.png'; 
import Menu from '../../../public/icons/Icono-menu.png'
import { LINKS } from '../../const/link';

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="General-Container-NavBar">
       <img src={Logo} alt="logo"/>
       <img src={Menu} alt="logo" className='icono-menu' style={{ width: '18px', height: '18px' }}/>
      
      <div className={`Nav-Bar ${showMenu ? 'active' : ''}`}>
        {LINKS.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ item }) {
  const { text, url } = item;
  const location = useLocation();
  
  const isActive = location.pathname === url;

  return (
    <li>
      <NavLink to={url} isActive={() => isActive} state={{ estado: '' }}>
        {text}
      </NavLink>
    </li>
    
  );

}
