import React, { useContext, useState } from 'react';
import logo from '../icons/logo.png';
import { Link } from 'react-router-dom';
import { Menu } from '../icons/icons';
import { AuthContext } from '../context/authContext';

const navContent=[
    {
        text:'Art',
        path:'/?category=art'
    },
    {
        text:'Science',
        path:'/?category=science'
    },
    {
        text:'Technology',
        path:'/?category=technology'
    },
    {
        text:'Cinema',
        path:'/?category=cinema'
    },
    {
        text:"Design",
        path:'/?category=design'
    },
    {
        text:'Food',
        path:'/?category=food'
    }
]
function NavBar() {
    const [tapMenu,setTapMenu] = useState(false);
    const {logout,currentUser} = useContext(AuthContext);


  return (
    <>
        <div className="w-[100%] h-24 fixed right-0 left-0 top-0 z-20 flex flex-row justify-around items-center bg-slate-200 tablet-sm:justify-between tablet-sm:px-2 x-sm:justify-between x-sm:px-2">
            <div className="w-20">
                <Link to={'/'} children={
                    <img src={logo} alt="" />
                }/>
            </div>
            <div className="w-fit flex flex-row items-center gap-2 tablet-sm:hidden x-sm:hidden">
                {navContent.map((item,index)=>(
                    <div>
                        <Link to={item.path} children={item.text} className='text-base font-medium'/>
                    </div>
                ))}
                <div>
                    <h5 className="text-lg font-semibold text-red-500 capitalize">
                        {currentUser?.username}
                    </h5>
                </div>
                {
                    currentUser?
                    <Link to={'/logout'} className='text-lg text-green-700 font-semibold' children={'logout'} onClick={logout}/>:
                    <Link to={'/login'} className='text-lg font-semibold' children='login'/>
                }
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-cyan-500 hover:text-white">
                    <Link to='/write' children='Write' className='text-base font-semibold' />
                </div>
            </div>
            <div className="hidden tablet-sm:w-fit tablet-sm:flex tablet-sm:flex-row tablet-sm:gap-2 tablet-sm:items-center x-sm:flex x-sm:flex-row x-sm:gap-2 x-sm:items-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-cyan-500">
                    <div>
                        <Link to='/write' children='Write' className='text-[0.95rem] font-semibold hover:text-cyan-950' />
                    </div>
                </div>
                <div>
                    <h5 className="text-lg font-semibold text-red-500">
                        {currentUser?.username}
                    </h5>
                </div>
                {
                    currentUser?
                    <Link to={'/logout'} className='text-base text-green-700 font-semibold' children={'logout'} onClick={logout}/>:
                    <Link to={'/login'} className='text-base font-semibold' children='login'/>
                }
                <button onClick={()=>setTapMenu(!tapMenu)}>
                    <Menu/>
                </button>
            </div>
        </div>
        {/* for phone screen  */}
        <div className={`${tapMenu?'fixed z-30 top-[3.75rem] right-3 flex flex-col gap-0.5 bg-slate-600 p-1 rounded-sm':'hidden'}`}>
            {navContent.map((item,index)=>(
                <div>
                    <Link to={item.path} children={item.text} className='text-base font-semibold text-white' onClick={()=>setTapMenu(!tapMenu)} />                    
                </div>
            ))}
        </div>
    </>
  )
}

export default NavBar;