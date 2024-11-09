import React from 'react'

const Card = () => {
  return (
    <div>
      <div class="border rounded-lg p-4 shadow-md bg-white w-full">
        <div class="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
          <span class="text-gray-500 text-sm">Product Image</span>
        </div>
        <h2 class="text-lg font-semibold mb-2">Sản phẩm test</h2>
        <p class="text-sm text-gray-600 mb-4">Fully restored 1950s typewriter in excellent condition.</p>
        <div class="flex justify-between items-center mb-4">
          <div>
            <span class="text-gray-500 text-xs">Current Bid</span>
            <p class="text-xl font-bold">123.123 ₫</p>
          </div>
          <div>
            <span class="text-gray-500 text-xs">Time Left</span>
            <p class="text-sm text-gray-700">0d 23h 59m</p>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="text-gray-500 text-xs">
            <span>1 watching</span>
          </div>
          <button class="px-4 py-2 bg-black text-white rounded font-semibold hover:bg-gray-800">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
