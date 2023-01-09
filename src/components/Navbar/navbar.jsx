import React from 'react';
import { FiSearch } from 'react-icons/fi'
import { IoCartOutline } from 'react-icons/io5'
import { CgFileDocument } from 'react-icons/cg'
import Layout from '../../Layout';

function Navbar() {
    return (
        <Layout>
            <div className="flex justify-between py-5">
                <div className='flex items-center gap-10 font-bold mx-auto'>
                    <a href="https://google.com" target={"_blank"}>Home</a>
                    <a href="#" target={"_blank"}>E-Order</a>
                    <a href="#" target={"_blank"}>Book Table</a>
                </div>
                <div className='flex items-center justify-evenly gap-7'>
                    <div className='flex items-center border border-slate-700 rounded-full px-3 py-1'>
                        <FiSearch />
                        <input type="text" placeholder='Seach' className='ml-3 border-0 bg-white focus:outline-none' />
                    </div>
                    <a href='#' target={"_blank"} className='relative'>
                        <IoCartOutline size={24} />
                        <div className="w-3 h-3 rounded-full bg-green-500 absolute top-0 right-0"></div>
                    </a>
                    <a href="#" target={"_blank"}>
                        <CgFileDocument size={24} />
                    </a>
                </div>
            </div>
        </Layout>
    )
};

export default Navbar;