import React from 'react'
import Layout from '../../Layout'
import { IoLocationOutline } from 'react-icons/io5'

export default function Hero() {
    return (
        <Layout>
            <div className='relative mt-7 rounded-xl text-white pt-3 pb-12 px-10 w-full min-h-max bg-red-700 w-full'>
                <div style={{ backgroundImage: "url('/images/carousel/pp.png')" }} className="mt-2 mx-auto bg-center w-[400px] h-[150px] lg:w-[570px] lg:h-[200px] xl:w-[670px] xl:h-[250px] 2xl:w-[850px] 2xl:h-[300px] bg-cover bg-red-700"></div>
                <div className='flex items-center absolute font-medium text-sm top-5 space-x-2'>
                    <IoLocationOutline fontWeight={900} size={16} color="white" />
                    <p>Summerecon Mall Bekasi.</p>
                </div>
                <div className='absolute bottom-10 left-10 space-y-2 w-72 text-xs'>
                    <p className='text-white font-semibold 2xl:text-base'>Withes Brew</p>
                    <p className='text-gray-300 text-justify 2xl:text-[13px]'>halloween cocktail is so stunning. Based on a Purple Hooter, the vivid colour is dramatically beautiful, but with a dark eerie feel perfect for an easy halloween party cocktail/shot.</p>
                </div>
                <div className='absolute bottom-10 right-10 space-y-2 w-72 text-xs'>
                    <p className='text-white font-semibold text-end 2xl:text-base'>Withes Brew</p>
                    <p className='text-gray-300 text-end 2xl:text-[13px]'>minuman tradisional asal daerah Pegunungan Andes, Perú yang terbuat dari jagung ungu (ckolli) yang dicampur dengan nanas dan kayu manis.</p>
                </div>
            </div>
        </Layout >
    )
}
