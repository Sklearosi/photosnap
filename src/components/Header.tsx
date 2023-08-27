import  { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="w-full flex justify-between items-center h-headerHeight">
        <img className="ml-4" src="/assets/shared/desktop/logo.svg" alt="" />
        <img
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="mr-4"
          src="/assets/shared/mobile/menu.svg"
          alt=""
        />
      </div>


      <div className={` absolute bg-white w-full  overflow-y-hidden  text-center transition-all duration-500 ${!menuOpen ? 'h-0  overflow-hidden transition-all duration-500' :  ' h-menuHeight overflow-auto pt-6'}`}>
        
        
        <ul className="grid justify-center items-center gap-3 text-center pb-5 w-10/12 m-auto text-15 font-bold leading-20 tracking-widest">
          <li>STORIES</li>
          <li>FEATURES</li>
          <li>PRICING</li>
        </ul>
        <button className="block w-80 h-12 bg-black m-auto mt-5 text-white text-center text-lg font-bold leading-5 tracking-wider">
          GET AN INVITE
        </button>
      </div>
    </div>
  );
};

export default Header;