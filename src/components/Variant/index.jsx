import React from 'react'
import Layout from '../../Layout'

export default function Variant() {
    return (
        <Layout>
            <div className='mt-10 grid grid-cols-4 grid grid-rows-2 gap-3'>
                <div className='relative h-fit pb-12 rounded-lg p-4 bg-[#FECACA]/80 w-full'>
                    <p className='absolute top-14 uppercase italic font-extrabold font-sans text-white text-lg'>cocktail</p>
                    <div style={{ backgroundImage: "url('/images/buttonMenu/Bg Menu Coctail.png')" }} className="ml-auto bg-center bg-cover h-[150px] w-[120px] bg-no-repeat"></div>
                    <p className='absolute bottom-4 uppercase px-3 py-1 w-fit rounded-lg font-semibold bg-white text-sm'>variant</p>
                    <div className='absolute top-24 left-14 uppercase italic font-extrabold font-sans text-white text-lg w-32 leading-none'>
                        alcoholic beverage
                    </div>
                </div>
                <div className='relative h-fit pb-12 rounded-lg p-4 bg-[#86EFAC]/80 w-full'>
                    <p className='absolute top-14 uppercase italic font-extrabold font-sans text-white text-lg'>cocktail</p>
                    <div style={{ backgroundImage: "url('/images/buttonMenu/Bg Menu Mocktail.png')" }} className="ml-auto bg-center bg-cover h-[150px] w-[120px] bg-no-repeat"></div>
                    <p className='absolute bottom-4 uppercase px-3 py-1 w-fit rounded-lg font-semibold bg-white text-sm'>variant</p>
                    <div className='absolute top-24 left-3 text-center uppercase italic font-extrabold font-sans text-white text-lg w-36 leading-none'>
                        non-alcohol beverage
                    </div>
                </div>
                <div className='relative h-fit pb-12 col-span-2 rounded-lg p-4 bg-[#FDBA74]/80 w-full'>
                    <p className='absolute top-14 uppercase italic font-extrabold font-sans text-white text-lg'>snack</p>
                    <div style={{ backgroundImage: "url('/images/buttonMenu/Bg Menu Snack.png')" }} className="ml-auto bg-center bg-cover h-[150px] w-[270px] bg-no-repeat"></div>
                    <p className='absolute bottom-4 uppercase px-3 py-1 w-fit rounded-lg font-semibold bg-white text-sm'>variant</p>
                    <div className='absolute top-24 left-14 uppercase italic font-extrabold font-sans text-white text-lg w-32 leading-none'>
                        makanan ringan
                    </div>
                </div>
                {/* BOTTOM */}
                <div className='relative col-span-2  rounded-lg p-4 bg-[#FDE047]/80 w-full'>
                    <p className='absolute top-14 right-7 uppercase italic font-extrabold font-sans text-white text-lg'>food</p>
                    <div style={{ backgroundImage: "url('/images/buttonMenu/Bg Menu Food.png')" }} className="mr-auto bg-center bg-cover h-[180px] w-[220px] bg-no-repeat"></div>
                    <p className='absolute bottom-4 right-7 uppercase px-3 py-1 w-fit rounded-lg font-semibold bg-white text-sm'>variant</p>
                    <div className='absolute top-24 right-1 uppercase italic font-extrabold font-sans text-white text-lg w-32 leading-none'>
                        makanan berat
                    </div>
                </div>
                <div className='relative rounded-lg p-4 bg-[#CA8A04]/80 w-full'>
                    <p className='absolute top-14 right-7 uppercase italic font-extrabold font-sans text-white text-lg'>coffee</p>
                    <div style={{ backgroundImage: "url('/images/buttonMenu/Bg Menu Coffee.png')" }} className="mr-auto bg-center bg-cover h-[150px] w-[120px] bg-no-repeat"></div>
                    <p className='absolute bottom-4 right-7 uppercase px-3 py-1 w-fit rounded-lg font-semibold bg-white text-sm'>variant</p>
                    <div className='absolute top-24 right-24 text-end uppercase italic font-extrabold font-sans text-white text-lg w-24 leading-none'>
                        hot & cool
                    </div>
                </div>
                <div className='relative rounded-lg p-4 bg-[#FDBA74]/80 w-full'>
                    <p className='absolute top-14 right-7 uppercase italic font-extrabold font-sans text-white text-lg'>cocktail</p>
                    <div style={{ backgroundImage: "url('/images/buttonMenu/Bg Menu Coctail.png')" }} className="mr-auto bg-center bg-cover h-[150px] w-[120px] bg-no-repeat"></div>
                    <p className='absolute bottom-4 right-7 uppercase px-3 py-1 w-fit rounded-lg font-semibold bg-white text-sm'>variant</p>
                    <div className='absolute top-24 right-8 uppercase italic font-extrabold font-sans text-white text-lg w-32 leading-none'>
                        alcoholic beverage
                    </div>
                </div>
            </div>
        </Layout>
    )
}
