import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Hero from '../../components/Hero'
import Variant from '../../components/Variant'
import Footer from '../../components/Footer'

function homePage() {
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 '>
            <Navbar />
            <Hero />
            <Variant />
            <Menu />
            <Footer />
        </div>
    )
}

export default homePage
