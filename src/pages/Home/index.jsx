import React from 'react'
import Layout from '../../Layout/index'
import { IoLocationOutline } from 'react-icons/io5'
import Navbar from '../../components/Navbar/navbar'
import ReactStars from 'react-stars'
import { GiTable } from 'react-icons/gi'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import Footer from '../../components/Footer'

export default function bookTable() {
    return (
        <div className='bg-gradient-to-b from-white to-red-200'>
            <Layout>
                <Navbar />

                <div className='relative mt-20 rounded-xl text-white px-10 w-full h-full bg-red-700 w-full bg-gradient-to-b from-green-600 to-green-400 flex flex-row' >
                    <div style={{ backgroundImage: "url('/images/BookTable/Omelette Sandwitch.png')" }} className="bg-center w-[400px] h-[150px] top-[100] mb-[50px] lg:w-[570px] lg:h-[200px] 2xl:w-[700px] xl:h-[250px] bg-cover bg-gradient-to-b from-green-600 to-cyan-500 "></div>
                    <div className='relative w-fit h-full mt-10 ml-10'>
                        <p className='absolute top-14 font-black italic font-sans text-white text-4xl w-80'>Soon</p>
                        <div className='relative mt-[40px]'>
                            <p className='absolute top-[70px] font-medium uppercase font-mono text-white text-left text-justify w-[150px]'>20% off</p>
                            <p className='absolute top-[90px] font-medium uppercase font-mono text-white text-left text-justify w-80'> 12/4/2022 - 23/4/2022</p>
                        </div>
                        <p className='absolute top-[160px] font-black italic font-sans text-white text-4xl w-80'>Summer Sale</p>
                    </div>
                </div>

                <div className='flex flex-row h-full w-full '>
                    <div className='relative w-1/2 h-full mt-28'>
                        <p className='absolute font-sans font-bold text-4xl w-80'> Reservation Your </p>
                        <p className='absolute font-sans font-medium text-4xl pt-[45px] w-80 '> Table Now!!</p>
                        <p className='absolute font-sans font-medium text-[15px] pt-[150px] w-80 text-left text-gray-500 drop-shadow-xl'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                        <p className='pt-[250px] font-bold'>Book Fee:</p>

                        <div className=' h-full w-fit grid grid-cols-3 gap-3 pt-4 '>

                            <div className='flex justify-center flex-row content-center mx-auto my-auto rounded-lg bg-red-100 w-full h-[60px] content-centre justify-center border-2 border-red-700 rounded-full'>
                                <div className='flex justify-center flex flex-row-center '>
                                    <span className='flex justify-center items-center'>
                                        <button className='mx-auto mx-3 text-3xl'>
                                            <IoIosArrowDown />
                                        </button>
                                    </span>

                                    <span className='mx-2 flex justify-center items-center mx-3 text-2xl font-bold'> 1 </span>

                                    <span className='flex justify-center items-center'>
                                        <button className='mx-auto mx-3 text-3xl'>
                                            <IoIosArrowUp />
                                        </button>
                                    </span>

                                </div>

                            </div>

                            {/* Button Reservation */}
                            <button className='relative bg-red-700 rounded-lg w-[170px] h-[60px] text-white rounded-full'>

                                <div className=' pl-[20px] h-[40px] bg-transparent text-black text-center mx-auto my-1 rounded-full'>
                                    <div style={{ backgroundImage: "url('/images/BookTable/ws.png')" }} className=" w-[40px] h-[40px] bg-no-repeat "></div>
                                    <span className='absolute bottom-0 left-[70px] pt-[12px] h-[50px] text-white font-medium text-xs'> Reservation </span>
                                </div>

                            </button>

                            {/* Button E-Order */}
                            <button className='relative bg-red-700 rounded-lg w-[170px] h-[60px] text-white rounded-full'>

                                <div className=' pl-[20px] h-[40px] bg-transparent text-black text-center mx-auto my-1 rounded-full'>
                                    <div style={{ backgroundImage: "url('/images/BookTable/ws (1).png')" }} className=" w-[40px] h-[40px] bg-no-repeat "></div>
                                    <span className='absolute bottom-0 left-[70px] pt-[12px] h-[50px] text-white font-medium text-xs'> E-Order </span>
                                </div>

                            </button>

                        </div>

                        <h1 className='font-sans font-medium text-[20px] pt-10'>Favorites Order Users Minggu ini</h1>

                        <div className='grid grid-cols-4 gap-7 mt-5 mr-10'>
                            <div className='bg-white rounded-[55px]'>

                                <div style={{ backgroundImage: "url('/images/randomMenu/Bg Menu (Semua) Fries.png')" }} className="mx-auto my-1 bg-center bg-cover h-[140px] w-[120px] bg-no-repeat"></div>
                                <div className='mt-1 mb-10 ml-[25px]'>
                                    <p className='text-bold text-xl font-bold'>Fries</p>
                                    <p class="text-black text-base"> Rp29.000 </p>
                                </div>

                            </div>
                            <div className='bg-white rounded-[55px]'>

                                <div style={{ backgroundImage: "url('/images/randomMenu/Bg Menu (Semua) Fries.png')" }} className="mx-auto my-1 bg-center bg-cover h-[140px] w-[120px] bg-no-repeat"></div>
                                <div className='mt-1 mb-10 ml-[25px]'>
                                    <p className='text-bold text-xl font-bold'>Fries</p>
                                    <p class="text-black text-base"> Rp29.000 </p>
                                </div>

                            </div>
                            <div className='bg-white rounded-[55px]'>

                                <div style={{ backgroundImage: "url('/images/randomMenu/Bg Menu (Semua) Fries.png')" }} className="mx-auto my-1 bg-center bg-cover h-[140px] w-[120px] bg-no-repeat"></div>
                                <div className='mt-1 mb-10 ml-[25px]'>
                                    <p className='text-bold text-xl font-bold'>Fries</p>
                                    <p class="text-black text-base"> Rp29.000 </p>
                                </div>

                            </div>
                            <div className='bg-white rounded-[55px]'>

                                <div style={{ backgroundImage: "url('/images/randomMenu/Bg Menu (Semua) Fries.png')" }} className="mx-auto my-1 bg-center bg-cover h-[140px] w-[120px] bg-no-repeat"></div>
                                <div className='mt-1 mb-10 ml-[25px]'>
                                    <p className='text-bold text-xl font-bold'>Fries</p>
                                    <p class="text-black text-base"> Rp29.000 </p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='mx-[70px] flex-row-reversed mt-28 grid col-end-4 gap-10 right-1'>
                        <div>
                            <p className='font-sans font-light text-6xl text-center pb-[10px]'>Food & Beverages</p>
                        </div>

                        {/* Mie Aceh */}
                        <div className='flex flex-row bg-white drop-shadow-2xl w-full h-[164px] rounded-[20px]'>
                            <div class="relative h-max w-full p-[20px] bg-white bg-transparent mx-[10px] pt-[30px] ">
                                <div class="flex items-center ">
                                    <ReactStars count={5} size={24} edit color2={'#ffd700'} />
                                    <p class="text-left text-gray-900 text-[15px] font-bold pl-2 "> (47 Penilaian) </p>
                                </div>
                                <h5 class="text-left text-gray-900 text-medium font-bold pt-3">Mie Aceh</h5>
                                <p class="text-black text-base font-bold mb-2 pb-5">
                                    Rp29.000
                                </p>
                            </div>
                            <div className='w-full h-[164px] bg-transparent '>
                                <div style={{ backgroundImage: "url('/images/randomMenu/Bg Menu (Semua) Mie Aceh.png')" }} className="mx-auto bg-center  bg-cover h-[140px] w-[120px] bg-no-repeat"></div>
                            </div>
                        </div>

                        {/* Fries */}
                        <div className='flex flex-row bg-white drop-shadow-2xl w-full h-[164px] rounded-[20px]'>
                            <div class="relative h-max w-full p-[20px] bg-white bg-transparent mx-[10px] pt-[30px] ">
                                <div class="flex items-center ">
                                    {/* <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> */}
                                    <ReactStars count={5} size={24} edit color2={'#ffd700'} />
                                    <p class="text-left text-gray-900 text-[15px] font-bold pl-2 "> (47 Penilaian) </p>
                                </div>
                                <h5 class="text-left text-black text-medium font-bold pt-3">Fries</h5>
                                <p class="text-black font-bold mb-2 pb-5">
                                    Rp29.000
                                </p>
                            </div>
                            <div className='w-full h-[164px] bg-transparent '>
                                <div style={{ backgroundImage: "url('/images/randomMenu/Bg Menu (Semua) Fries.png')" }} className="mx-auto bg-center  bg-cover h-[140px] w-[120px] bg-no-repeat"></div>
                            </div>
                        </div>
                        
                        {/* Coffe Gula Aren */}
                        <div className='flex flex-row bg-white drop-shadow-2xl w-full h-[164px] rounded-[20px]'>
                            <div class="relative h-max w-full p-[20px] bg-white bg-transparent mx-[10px] pt-[30px] ">
                                <div class="flex items-center ">
                                    {/* <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> */}
                                    <ReactStars count={5} size={24} edit color2={'#ffd700'} />
                                    <p class="text-left text-gray-900 text-[15px] font-semibold pl-2 "> (47 Penilaian) </p>
                                </div>
                                <h5 class="text-left text-black text-medium font-black pt-3">Coffee Gula Aren</h5>
                                <p class="text-black font-black mb-2 pb-5">
                                    Rp29.000
                                </p>
                            </div>
                            <div className='w-full h-[164px] bg-transparent '>
                                <div style={{ backgroundImage: "url('/images/randomMenu/Bg Menu (Semua) Coffee Gula Aren.png')" }} className="mx-auto bg-center  bg-cover h-[150px] w-[120px] bg-no-repeat"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='relative mt-7 rounded-xl text-white mt-28 pb-12 px-10 w-full h-[368px] bg-red-700 w-full'>
                    <div className='absolute bottom-10 left-10 space-y-2 w-72 text-xs'>
                        <p className='text-white font-semibold xl:text-base'>Until Now</p>
                        <p className='text-gray-300 text-justify xl:text-[13px]'>halloween cocktail is so stunning. Based on a Purple Hooter, the vivid colour is dramatically beautiful, but with a dark eerie feel perfect for an easy halloween party cocktail/shot.</p>
                    </div>
                    <div className='absolute top-10 right-10 space-y-2 w-72 text-xs'>
                        <p className='text-white font-semibold text-end xl:text-base'>Since 1992</p>
                        <p className='text-gray-300 text-end xl:text-[13px]'>minuman tradisional asal daerah Pegunungan Andes, Perú yang terbuat dari jagung ungu (ckolli) yang dicampur dengan nanas dan kayu manis.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-2 mt-32 mb-32'>
                    <div style={{ backgroundImage: "url('/images/BookTable/Component 6.png')" }} className="w-[620px] h-[790px] "></div>

                    <div className='text-sans ml-[80px]'>
                        <p className='font-black text-6xl'>contact</p>
                        <p className='mt-[20px] w-[400px] text-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                        <div className='flex items-center border border-slate-700 rounded-[10px] px-3 py-1 mt-[20px] bg-white'>
                            <input type="text" placeholder='Email' className='ml-3 border-0 bg-white focus:outline-none my-[10px]' />
                        </div>
                        <div className='flex items-center border border-slate-700 rounded-[10px] px-3 py-1 mt-[15px] bg-white'>
                            <input type="text" placeholder='Phone' className='ml-3 border-0 bg-white focus:outline-none my-[10px]' />
                        </div>
                        <div className='flex items-start border border-slate-700 rounded-[10px] px-3 py-1 mt-[15px] bg-white'>
                            <input type="text" placeholder='Messages' className='ml-3 border-0 bg-white focus:outline-none my-[50px] top-0' />
                        </div>
                        <button className='bg-red-700 mt-[10px] text-white h-[50px] w-full rounded-[10px] mt-[35px]'> Send </button>
                        <div className='grid grid-cols-3 gap-4'>
                            <button className='relative bg-white rounded-lg w-[170px] h-[60px] text-white rounded-lg mt-5 border-2 border-black'>

                                <div className=' pl-[20px] h-[40px] bg-transparent text-black text-center mx-auto rounded-lg'>
                                    <div style={{ backgroundImage: "url('/images/BookTable/ws (2).png')" }} className=" w-[40px] h-[40px] bg-no-repeat "></div>
                                    <span className='absolute bottom-0 left-[70px] pt-[12px] h-[50px] text-black font-medium text-xl mb-[5px]'> Phone</span>
                                </div>

                            </button>

                            <button className='relative bg-white rounded-lg w-[170px] h-[60px] text-white rounded-lg mt-5 border-2 border-black'>

                                <div className=' pl-[20px] h-[40px] bg-transparent text-black text-center mx-auto rounded-lg'>
                                    <div style={{ backgroundImage: "url('/images/BookTable/ws (2).png')" }} className=" w-[40px] h-[40px] bg-no-repeat "></div>
                                    <span className='absolute bottom-0 left-[70px] pt-[12px] h-[50px] text-black font-medium text-xl mb-[5px]'>Fax</span>
                                </div>

                            </button>

                            <button className='relative bg-white rounded-lg w-[170px] h-[60px] text-white rounded-lg mt-5 border-2 border-black'>

                                <div className=' pl-[20px] h-[40px] bg-transparent text-black text-center mx-auto rounded-lg'>
                                    <div style={{ backgroundImage: "url('/images/BookTable/ws (3).png')" }} className=" w-[40px] h-[40px] bg-no-repeat "></div>
                                    <span className='absolute bottom-0 left-[70px] pt-[12px] h-[50px] text-black font-medium text-xl mb-[5px]'>Mail</span>
                                </div>

                            </button>
                        </div>
                    </div>
                </div>



            </Layout >

            <Footer />
        </div >
    )
}


