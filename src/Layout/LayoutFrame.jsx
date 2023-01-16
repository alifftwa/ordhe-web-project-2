import React from 'react'

export default function Layout({ children }) {
    return (
        <div className='pb-20'>
            <main>
                <div className="container place-content-center mx-auto mt-20 bg-red-50 rounded-lg  ">
                    <div className="px-32 py">
                        {children}
                    </div>
                </div>
            </main>
        </div >
    )
}
