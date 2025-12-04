import React from "react";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";

export default function AccountCard() {
  // using the uploaded image path available in the container
  const avatar = "/images/hero.png";

  return (
    <div className="bg-white p-4 rounded-xl shadow relative">
      {/* Top row: Active (left) + Vertical Dots (right) */}
      <div className="flex justify-between items-center mb-3">
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
          Active
        </span>

        <HiDotsVertical className="text-gray-500 cursor-pointer text-xl" />
      </div>
      <div className="flex flex-col items-center text-center py-6">
        <img
          src={avatar}
          alt="avatar"
          className="w-20 h-20 rounded-full mb-3 object-cover"
        />
        <h3 className="font-medium">Ekwoge Junior</h3>
        <p className="text-sm text-gray-500">Data Engineer</p>
        <div className="mt-3 text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
          ekwogejunior@gmail.com
        </div>
      </div>
    </div>
  );
}
