import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div class="flex flex-col min-h-screen ">
            <div className="bg-white fixed top-0 w-full z-50">
                <Header />
            </div>

            <main class="flex-grow py-16">
                <Outlet />
            </main>
            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </div>
    )
}

export default Layout
