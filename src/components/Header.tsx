import  { useState } from 'react';
import { Link } from "react-router-dom"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=''>
      <div className="w-full flex justify-between items-center h-headerHeight">
        <img className="ml-4" src="/assets/shared/desktop/logo.svg" alt="" />
        <img
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="mr-4 md:hidden"
          src="/assets/shared/mobile/menu.svg"
          alt=""
        />
        <ul className=' w-64 justify-between items-center hidden md:flex'>
          <Link to='/stories' onClick={() => {
            setMenuOpen(false)
          }}>STORIES</Link>
          <Link to="/features" onClick={() => {
            setMenuOpen(false)
          }}>FEATURES</Link>
          <Link to='/pricing' onClick={() => {
            setMenuOpen(false)
          }}>PRICING</Link>
          </ul>
          <button className=" h-12 bg-black   text-white text-center text-lg font-bold leading-5 tracking-wider mt-0 w-40 mr-4 hidden md:block">
          GET AN INVITE
        </button>
      </div>


      <div className={` absolute bg-white w-full  overflow-y-hidden  text-center transition-all duration-500 ${!menuOpen ? 'h-0  overflow-hidden transition-all duration-500' :  ' h-menuHeight overflow-auto pt-6'} `}>
        
        
        <ul className="grid justify-center items-center gap-3 text-center pb-5 w-10/12 m-auto text-15 font-bold leading-20 tracking-widest border-b border-black  ">
          <Link to='/stories' onClick={() => {
            setMenuOpen(false)
          }}>STORIES</Link>
          <Link to="/features" onClick={() => {
            setMenuOpen(false)
          }}>FEATURES</Link>
          <Link to='/pricing' onClick={() => {
            setMenuOpen(false)
          }}>PRICING</Link>
        </ul>
        <button className="block w-80 h-12 bg-black m-auto mt-5 text-white text-center text-lg font-bold leading-5 tracking-wider md:mt-0 md:w-40">
          GET AN INVITE
        </button>
      </div>
    </div>
  );
};

export default Header;
