import { Search } from 'lucide-react'
import React from 'react'
import CardProduct from '../components/CardProduct'
import Breadcrumb from '../components/Breadcrumb'

const Upcoming = () => {
    const products = Array.from({ length: 4 });
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Upcoming Auctions', href: '/Upcoming' },
        { label: 'Đăng ký đấu giá', href: '/AuctionRegister' }
    ];

    return (
        <div>
            <section>
                <div className="container mx-auto px-6 mb-4 space-y-6">
                    <h2 className="text-3xl font-semibold">Upcoming Auctions</h2>
                    {/* <p>
                        <span className="text-gray-400 font-semibold">Home</span> / <span className="text-black font-semibold">Upcoming Auctions</span>
                    </p> */}
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className="w-full border border-gray-100 pb-6"></div>
                <div className="flex items-center mb-6 px-6">
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 rounded bg-black text-white">
                            Upcoming
                        </button>
                        <button className="px-4 py-2 rounded bg-gray-200 text-gray-700">
                            Completed
                        </button>
                        <button className="px-4 py-2 rounded bg-gray-200 text-gray-700">
                            Featured
                        </button>
                    </div>

                    <div className="ml-auto w-1/5">
                        <input
                            type="text"
                            placeholder="Search auctions..."
                            className="w-full px-4 py-2 border rounded-md text-gray-500"
                        />
                    </div>
                </div>
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((_, index) => (
                        <CardProduct key={index} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Upcoming
