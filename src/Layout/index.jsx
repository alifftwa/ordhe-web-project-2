import React from 'react'

export default function Layout({ children }) {
    return (
        <div>
            <main>
                <div className="container mx-auto">
                    <div className="px-32">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}