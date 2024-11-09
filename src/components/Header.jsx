import React, { useState } from 'react'
import { Gavel, Search, Bell } from 'lucide-react'
import { Link } from 'react-router-dom';
import LoginModal from './ModalLogin';

const Header = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const handleLoginClick = () => {
        setLoginModalOpen(true);
    };

    const handleCloseModal = () => {
        setLoginModalOpen(false);
    };
    return (
        <div class="flex flex-row justify-between">
            <div class="flex flex-row space-x-4">
                <div class="flex flex-row bold">
                    <a>
                        <div>
                            <Gavel />
                        </div>
                    </a>
                    Auction App
                </div>
                <nav>
                    <ul class="flex flex-row space-x-4">
                        <li><Link to="/LiveAuctions">Live Auctions</Link></li>
                        <li><Link to="/Upcoming">Upcoming Autions</Link></li>
                        <li>Sell</li>
                        <li>About</li>
                    </ul>
                </nav>
            </div>

            <div class="flex">
                <div class="relative">
                    <input
                        type="text"
                        placeholder="Search auctions..."
                        class="border border-gray-300 rounded-md px-4 py-1 pl-10 w-full" />
                    <Search class="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
                <Bell class="h-5 w-5 mx-1 mt-2" strokeWidth={3} />
                <div class="flex mx-1 mt-1" onClick={handleLoginClick}>
                    <img src='avatar.jpg' class="w-8 h-8 rounded-full left-3" />
                    <span>Ngoc Hoang</span>
                </div>
            </div>
            <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
        </div>
    )
}

export default Header
