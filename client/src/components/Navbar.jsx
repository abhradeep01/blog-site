import { Button, IconButton } from '@mui/material';
import React from 'react'
import { navcontent } from './assets';
import { Link } from 'react-router';
import MenuIcon from './Menu';
import './style/navbar.scss';

function Navbar() {
  return (
    <>
        <div className="navbar">
            <IconButton href='/'>
                <img src="https://i.postimg.cc/FKDw3VJk/logo.png" alt="" className='w-[4.25rem]'/>
            </IconButton>
            <div className="navigation">
                {
                    navcontent.map((item,index)=>{
                        return <Link key={index} to={item.path} className='nav-cat'>{item.text}</Link>
                    })
                }
                <Button variant='contained' size='small' href='/write' sx={{fontSize:'1rem',fontWeight:'600',fontFamily:'monospace'}}>
                    write
                </Button>
            </div>
            {/* for ipad screen */}
            <div className="menu">
                <Button variant='contained' size='small' href='/write' sx={{fontSize:'0.8rem',fontWeight:'600',fontFamily:'revert-layer'}}>
                    write
                </Button>
                <MenuIcon/>
            </div>
        </div>
    </>
  )
}

export default Navbar;