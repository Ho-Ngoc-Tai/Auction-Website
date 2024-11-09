import React from "react";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-purple-100 to-white">
            <h1 className="text-4xl font-bold mb-2">Get in Touch with Us</h1>
            <p className="text-lg text-gray-600 mb-8">
                We're here to assist and answer any question you may have.
            </p>
            <main className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 grid gap-8 md:grid-cols-2 mb-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Drop Us a Message</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <MapPin />
                            <p>123 Auction Lane, Bidding City, AC 12345</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone />
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail />
                            <p>support@auctionhouse.com</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Clock />
                            <p>Monday - Friday: 9am - 5pm</p>
                        </div>
                    </div>
                    <div className="mt-6 bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-500">
                        Map Placeholder
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;
