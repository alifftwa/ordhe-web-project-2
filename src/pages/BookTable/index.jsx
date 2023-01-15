import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import { IoLocationOutline } from 'react-icons/io5'
import Layout from '../../Layout'

function bookTable() {
    return (
        <Layout>
            <Navbar />
            <div className='relative mt-7 rounded-xl text-white pt-3 pb-12 px-10 w-full min-h-max bg-red-700 w-full'>
                <div style={{ backgroundImage: "url('/images/carousel/pb.png')" }} className="mt-2 mx-auto bg-center w-[400px] h-[150px] lg:w-[570px] lg:h-[200px] xl:w-[670px] xl:h-[250px] 2xl:w-[850px] 2xl:h-[300px] bg-cover bg-red-700"></div>
                <div className='flex items-center absolute font-medium text-sm top-5 space-x-2'>
                    <IoLocationOutline fontWeight={900} size={16} color="white" />
                    <p>Summerecon Mall Bekasi.</p>
                </div>
                <div className='absolute bottom-10 left-10 space-y-2 w-72 text-xs'>
                    <p className='text-white font-semibold 2xl:text-base'>Withes Brew</p>
                    <p className='text-gray-300 text-justify 2xl:text-[13px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem est eaque corporis exercitationem, esse asperiores mollitia odit velit ipsa soluta.</p>
                </div>
                <div className='absolute bottom-10 right-10 space-y-2 w-72 text-xs'>
                    <p className='text-white font-semibold text-end 2xl:text-base'>Withes Brew</p>
                    <p className='text-gray-300 text-end 2xl:text-[13px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem est eaque corporis exercitationem, esse asperiores mollitia odit velit ipsa soluta.</p>
                </div>
            </div>
        </Layout>
    )
};

export default bookTable;