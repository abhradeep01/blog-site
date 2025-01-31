import { IconButton } from '@mui/material'
import React from 'react';
import {Search} from '@mui/icons-material'
import style from './style/style.module.scss'
function SearchMenu() {
    const [searchExpand,setSearchExpand] = React.useState(false);
  return (
    <div className="w-fit">
      {
        searchExpand?
        <input type="text" placeholder='Search what you want?' 
        className={style.popup_search}/>:
        <IconButton onClick={()=>setSearchExpand(true)} sx={searchExpand?{display:'none'}:{display:'inline'}}>
          <Search fontSize='medium' htmlColor='black'/>
        </IconButton>
      }
      
    </div>
  )
}

export default SearchMenu;