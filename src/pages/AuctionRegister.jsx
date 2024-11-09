import React from 'react'
import Breadcrumb from '../components/Breadcrumb';

const AuctionRegister = () => {
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
                        <span className="text-gray-400 font-semibold">Home</span>
                        / <span className="text-gray-400 font-semibold">Upcoming Auctions</span>
                        / <span className="text-black font-semibold">Đăng ký đấu giá</span>
                    </p> */}
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </section>
            <div className="w-full border border-gray-100 pb-6"></div>
            <section>
                <div className='text-center'>
                    <h1 className='font-bold text-3xl'>Đăng ký đấu giá tài sản đấu giá</h1>
                </div>
                <div className=''>
                    <h2 className='text-xl font-semibold'>Hình ảnh sản phẩm</h2>
                </div>
            </section>
            {/* Form Container */}
            <form className="bg-white shadow-md rounded-lg p-8 space-y-6">

                {/* Image Upload */}
                <div className="text-center">
                    <label className="block text-lg font-medium mb-2">Hình ảnh sản phẩm</label>
                    <div className="border-dashed border-2 border-gray-300 rounded-lg w-40 h-40 flex items-center justify-center cursor-pointer">
                        <span className="text-gray-500">+ Upload</span>
                    </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tên người dùng</label>
                        <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Nhập tên người dùng" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email liên hệ</label>
                        <input type="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Nhập email liên hệ" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                        <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Nhập tên sản phẩm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Địa chỉ sản phẩm</label>
                        <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Nhập địa chỉ sản phẩm" />
                    </div>
                </div>

                {/* Select Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Danh mục</label>
                        <select className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                            <option>Chọn danh mục</option>
                            <option>Đồ cổ</option>
                            <option>Nghệ thuật</option>
                            <option>Xe cộ</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tình trạng sản phẩm</label>
                        <select className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                            <option>Chọn tình trạng</option>
                            <option>Mới</option>
                            <option>Đã qua sử dụng</option>
                            <option>Hàng hiếm</option>
                        </select>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700">
                        Đăng ký đấu giá
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AuctionRegister
