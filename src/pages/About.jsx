import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col items-center min-h-screen bg-gradient-to-b from-purple-100 to-white'>
            <section className='p-6 text-center'>
                <h1 className='text-6xl font-bold p-6'>About Auction House</h1>
                <p className='font-semibold text-xl text-gray-400 p-6'>Your premier destination</p>
            </section>
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-8">
                <div className="flex space-x-0.5 overflow-x-auto border-b border-gray-200">
                    <button className="flex-1 min-w-[100px] py-2 px-4 text-center border-b-2 border-indigo-500 text-indigo-600 font-semibold">
                        About Us
                    </button>
                    <button className="flex-1 min-w-[100px] py-2 px-4 text-center text-gray-500">
                        Rules & Regulations
                    </button>
                    <button className="flex-1 min-w-[100px] py-2 px-4 text-center text-gray-500">
                        Auction Process
                    </button>
                    <button className="flex-1 min-w-[100px] py-2 px-4 text-center text-gray-500">
                        Legal Terms
                    </button>
                    <button className="flex-1 min-w-[100px] py-2 px-4 text-center text-gray-500">
                        Our Values
                    </button>
                    <button className="flex-1 min-w-[100px] py-2 px-4 text-center text-gray-500">
                        Our History
                    </button>
                    <button className="flex-1 min-w-[100px] py-2 px-4 text-center text-gray-500">
                        Achievements
                    </button>
                    <button className="flex-1 min-w-[100px] py-2 px-4 text-center text-gray-500">
                        FAQ
                    </button>
                </div>

                <div className="mt-6 text-gray-800">
                    <h2 className="text-2xl font-semibold mb-4">Welcome to Auction House</h2>
                    <p className="mb-4">
                        Auction House is a premier online auction platform connecting enthusiasts, collectors, and bargain hunters with unique items from around the world. Founded in 2010, we've grown to become one of the most trusted names in online auctions.
                    </p>
                    <p className="mb-4">
                        Our mission is to provide a secure, transparent, and exciting environment for buyers and sellers alike. Whether you're a seasoned collector or a first-time bidder, Auction House offers an unparalleled experience in online auctions.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">What Sets Us Apart</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Wide range of categories: From antiques to modern art, electronics to rare collectibles</li>
                        <li>Verified sellers: We ensure all our sellers are vetted for authenticity and reliability</li>
                        <li>Secure transactions: State-of-the-art security measures to protect your data and finances</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
