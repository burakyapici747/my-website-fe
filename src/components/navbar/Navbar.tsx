import React from 'react';
import Links from "./links/Links";
import Link from "next/link";
import {M_PLUS_Rounded_1c} from "@next/font/google";

const mPlusRounded = M_PLUS_Rounded_1c({
   subsets: ['vietnamese'],
   weight: ['500'],
});

const Navbar = () => {
    return (
        <nav className="w-full">
            <div className="w-full site-navbar-container flex flex-wrap p-2">
                <div className="flex items-center mr-5">
                    <h1 className="text-md">
                        <Link href="/">
                            <span className="flex gap-1 group font-bold text-md21 items-center">
                                <svg className="w-4 text-white group-hover:rotate-[20deg]" fill="white" width="14px" height="14px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                                    <title/>
                                    <g>
                                        <path d="M12,72A12,12,0,1,0,24,84,12.0119,12.0119,0,0,0,12,72Z"/>
                                        <path d="M12,36a6,6,0,0,0,0,12A36.0393,36.0393,0,0,1,48,84a6,6,0,0,0,12,0A48.0512,48.0512,0,0,0,12,36Z"/>
                                        <path d="M12,0a6,6,0,0,0,0,12A72.0788,72.0788,0,0,1,84,84a6,6,0,0,0,12,0A84.0981,84.0981,0,0,0,12,0Z"/>
                                    </g>
                                </svg>
                                <p className={`text-xl ${mPlusRounded.className}`}>Burak Yapici's Blog</p>
                            </span>
                        </Link>
                    </h1>
                </div>
                <Links/>
                <div className="flex flex-row justify-end items-center gap-2">
                    <Link className="text-orange-200" href="">Login</Link>
                    <Link className="text-orange-200" href="">Sign up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;