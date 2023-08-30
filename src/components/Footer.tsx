import {Link } from "react-router-dom"
import Logo from "./Logo";
import Socials from "./Socials";

const Footer = () => {
    return(
        <div className=" bg-black relative md:h-72">
            <div className=" relative md:h-40 md:w-10/12  md:m-auto md:top-14">
            <div className=" pt-12 md:absolute md:top-0 md:pt-0">
            <Logo/>
            </div>
            <Socials/>
            <div className=" grid gap-3 text-white text-center mt-14 text-xs font-bold leading-4 tracking-widest md:absolute md:flex md:mt-0 md:top-12">
                <Link className=" hover:opacity-50 transition-all duration-500" to='/' onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' 
                      });
                }}>HOME</Link>
                <Link className=" hover:opacity-50 transition-all duration-500" to='/stories' onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' 
                      });
                }}>STORIES</Link>
                <Link className=" hover:opacity-50 transition-all duration-500" to="/features" onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' 
                      });
                }}>FEATURES</Link>
                <Link className=" hover:opacity-50 transition-all duration-500" to='/pricing' onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' 
                      });
                }}>PRICING</Link>
            </div>
            <div className=" flex items-center justify-between w-44 m-auto mt-20 md:absolute md:top-0 md:right-0 md:mt-0 md:m-0 group cursor-pointer">
                <p className="text-xs font-bold leading-4 tracking-wider text-white group-hover:underline">GET AN INVITE</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
            </div>
            <p className="text-base font-normal leading-5 text-white text-center mt-7 pb-10 md:absolute md:mt-0 md:pb-0 md:bottom-0 md:right-0">Copyright 2019. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer