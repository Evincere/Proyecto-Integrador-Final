import React, { useContext } from 'react'
import { Context } from '../context';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { state } = useContext(Context);
  const links = state.data?.links;
  return (
    <div className="header-nav">
      <div className='header_logo'>
        <img src="images/codoacodo.png" alt="logo" className='logo' />
        <Link to ='/' className='label_logo'>Conf Bs As</Link>
      </div>
      <div>
        <ul className='links'>
          {links?.map((link) => (
            <Link to={link.url} key={link.label} className='link_item'>{link.label}</Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar