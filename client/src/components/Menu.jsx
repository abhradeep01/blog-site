import { IconButton } from '@mui/material'
import React from 'react';
import {Close, Menu} from '@mui/icons-material';
import { navcontent } from './assets';
import style from './style/style.module.scss'
function MenuIcon() {
    const [showMenu,setShowmenu] = React.useState(false);
  return (
    <div className={style.dropdown}>
        {
            showMenu?
            <IconButton onClick={()=>setShowmenu(false)}>
                <Close sx={{color:'grey'}}/>
            </IconButton>:
            <IconButton onClick={()=>setShowmenu(true)}>
                <Menu sx={{color:'grey'}}/>
            </IconButton>
        }
        <div className={showMenu?style.menu_show:style.menu_hide}>
            {
                navcontent.map((item,index)=>{
                    return(
                        <a key={index} href={item.path} className='anchor'>{item.text}</a>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MenuIcon;