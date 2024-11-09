import React from 'react'
import { Filter, ArrowUpNarrowWide } from 'lucide-react';
import CardProduct from '../components/CardProduct'
import CardSold from '../components/CardSold';

const Home = () => {
    const products = Array.from({ length: 4 });

    return (
        <div class="flex flex-col space-y-6 py-16">
            {/* Highlight */}
            <section className='flex mx-16'>
                <div class="w-1/2 space-y-4 text-left my-auto">
                    <h1 class="text-4xl font-bold">Discover Unique Treasures at Our Auctions</h1>
                    <p>Browse a curated selection of rare and valuable items up for auction.<br />Register now to start bidding.</p>
                    <div class="flex justify-center space-x-4">
                    </div>
                    <div class="justify-between pr-2 flex space-x-3 ">
                        <button class="bg-black text-white px-6 py-3 rounded-md w-1/2">Browse Auctions</button>
                        <button class="bg-gray-200 text-black px-6 py-3 rounded-md w-1/2">Sell an Item</button>
                    </div>
                </div>
                <div className="mt-8 mt-0 w-1/2">
                    <div className="relative">
                        <img src="avatar.jpg" alt="Auction Item" className="w-full rounded-lg shadow-md" />
                        <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-4 rounded-b-lg w-full">
                            <h3 className="text-lg font-semibold">Rare Antique Vase</h3>
                            <p className="text-sm">Current Bid: $2,500</p>
                            <p className="text-sm">Ends in 2 days</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature product */}
            <section className='mx-10'>
                <div className='flex justify-between mt-6 mx-6'>
                    <h1 className='font-bold text-2xl'>Featured Products</h1>
                    <span className='flex'>
                        <button className='flex items-center border rounded-md px-3 py-1 hover:bg-gray-100 mr-2'> <Filter className="mr-1" />Filters</button>
                        <button className='flex items-center border rounded-md px-3 py-1 hover:bg-gray-100'><ArrowUpNarrowWide className="mr-1" />Sort</button>
                    </span>
                </div>
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
                    {products.map((_, index) => (
                        <CardProduct key={index} />
                    ))}
                </div>
            </section >

            {/* Product Detail */}
            < section className="min-h-screen bg-gray-100 space-y-6 mt-6" >
                <div className='mx-16'>
                    <h1 className="font-bold text-2xl">Product Details</h1>
                </div>
                <div className="flex flex-col items-center space-y-4 md:items-start md:flex-row md:space-x-6 mx-16">
                    <img src="avatar.jpg" className="w-full md:w-1/2" alt="Tách trà 1987" />

                    <div className="space-y-4 md:w-1/2">
                        <h2 className="font-semibold text-xl">Tách trà 1987</h2>
                        <p>Tách trà được sử dụng vào năm 1987, hàng hiếm.</p>

                        <div className="flex justify-between items-center">
                            <div>
                                <span className="font-semibold">Time Remaining:</span>
                                <span className="ml-2">0d 0h 0m</span>
                            </div>
                            <div className="text-right">
                                <span className="font-semibold">Current Bid:</span>
                                <span className="ml-2 text-xl font-bold">7.000.000 đ</span>
                            </div>
                        </div>

                        <button className="bg-black text-white px-6 py-2 font-semibold rounded w-full">Place Bid</button>
                    </div>
                </div>
            </section >

            {/* Product Sold */}
            <section className='mx-10'>
                <div className='flex justify-between mt-6 mx-6'>
                    <h1 className='font-bold text-2xl'>Sold Items</h1>
                </div>
                <div className='container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {products.map((_, index) => (
                        <CardSold key={index} />
                    ))}
                </div>
            </section >

            {/* About Auction House */}
            < section className='bg-gray-100 space-y-6 mt-6 pl-6 pb-6'>
                <div className='mx-16 space-y-6'>
                    <h1 className='font-bold text-2xl'>About Auction House</h1>
                    <p >Auction House is a premier destination for collectors and vintage anthusiasts to discover unique and rare items. Our team of experts carefully curates each item, ensuring authenticity and quality Whether you're looking for a one-of-a-kind piece of a timeless classic, Auction House is the place to find your next treasure.</p>
                    <div className='flex justify-center'>
                        <button className='bg-black text-white px-6 py-3 rounded-md items-center justify-center text-center'>Explore Our Collection</button>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Home
