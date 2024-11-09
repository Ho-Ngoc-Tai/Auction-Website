import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div class="flex bg-black text-white py-6 justify-between items-center pl-6">
            <p>&copy; 2024 Auction Site. All rights reserved.</p>
            <div class="flex space-x-6 pr-6">
                <a href="#" ><Link to="/About">About</Link></a>
                <a href="#" ><Link to="/Contact">Contact</Link></a>
                <a href="#" >Terms of Service</a>
            </div>
        </div>

    )
}

export default Footer
