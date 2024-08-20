
import { Link, NavLink, } from 'react-router-dom';
import logo from '../assets/Orange_and_Gray_Tag_Cart_Virtual_Shop_Logo-removebg-preview.png'
import { PiDotsThreeCircleVerticalFill } from "react-icons/pi";
import UseAuth from '../hook/useAuth';
import { Tooltip } from 'react-tooltip'
const Header = () => {
    const {logOut,user} = UseAuth()
   
    const navlinks = <>
    <li className={`font-oswald text-xs lg:text-lg ml-5   `}  id="sidebar"><NavLink to={"/"}>Home</NavLink></li>
    
    <li className={`font-oswald text-xs lg:text-lg ml-5  `} id="sidebar"> <NavLink >Shop</NavLink></li>

    
  </>
     
    return (
        <div>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
        navlinks
      }
      </ul>
    </div>
    <div className='flex justify-center items-center'>
    <img src={logo} className="md:h-16 h-8 w-auto" alt="Logo" />
    <a className="text-xl md:text-2xl gap-0 font-oswald font-bold ">ShopSift</a>
    </div>
   
  </div>

  <div className="navbar-end">
  <div className="navbar-center ml-24 hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 ">
    {
    navlinks
  }
    </ul>
  </div>
  
      {user? <div className="flex items-center gap-1">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full my-anchor-element ">
        <Tooltip anchorSelect=".my-anchor-element" place="top">
 {user.displayName}
</Tooltip>
          <img src={user?.photoURL || "https://i.ibb.co/BcWRPHQ/derek-lee-93-L-Ph-OWPk-Y-unsplash.jpg"} />

        </div>
    
      </div>
      <ul tabIndex={0} className="mt-3 z-[1]  p-2 shadow menu menu-sm dropdown-content bg-green-50  rounded-box w-52">
        <li className="hover:bg-[#55679C] hover:rounded-xl text-black hover:text-white font-raleway fon-bold">
          <a className="justify-between mb-2">
          {user?.displayName||'user name not found'}
            
          </a>
        </li >
        <li className={` hover:rounded-xl text-black hover:bg-[#55679C] hover:text-white font-raleway fon-bold`}><a className="mb-2">{user?.email || 'user email not found'}</a></li>
       
      </ul>
    </div>
    <div className="dropdown dropdown-end ml-2">

    <div onClick={logOut}  className="btn font-raleway bg-[#FC4100] text-xs md:text-base text-medium  text-white ">{}LogOut</div>
     
     </div>
     
      </div>:
    
  <div className="dropdown dropdown-end ml-2">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <button className="md:h-full h-8 w-full">
            <PiDotsThreeCircleVerticalFill className={`h-full w-full bg-white  text-[#EB5B00] `}></PiDotsThreeCircleVerticalFill>
          </button>
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
      
       <Link to={'/login'}><li className={`font-raleway rounded-lg mb-3 font-bold text-lg bg-[#55679C] text-white`}><a>Log in</a></li></Link> 
       <Link to={'/register'}><li className={`font-raleway rounded-lg mb-3 font-bold text-lg bg-[#EB5B00] text-white`}><a>Register</a></li></Link> 
   
      </ul>
    </div>
 } 
  
  </div>
</div></div>
        </div>
    );
};

export default Header;