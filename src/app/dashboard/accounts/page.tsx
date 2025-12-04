import React from "react";
import Header from "../../components/Navbar";
import AccountCard from "../../components/AccountCard";
import Navbar from "../../components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import CircularBox from "@/app/components/CircularBox";
import { FaStar } from "react-icons/fa6";

export default function AccountsPage() {
  return (
    <div className="min-h-screen -m-2">
      <Navbar />

      <div className="flex">
        <Sidebar />
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex gap-8">
          <CircularBox value={100} label="Total" />
          <CircularBox value={50} label="Active" />
          <CircularBox value={50} label="Inactive" />
          <CircularBox value={50} label="New" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 px-4 sm:px-10 mb-10">
        {/* LEFT SIDE (Title + Search) */}
        <div className="ml-20 flex items-center gap-6">
          <h2 className="text-sm text-gray-400">ACCOUNTS</h2>

          {/* Search bar */}
          <div className="flex items-center bg-white border border-gray-300 rounded-[20px] px-3 py-1 w-[200px] sm:w-[350px] md:w-[300px]">
            <span className="mr-2 text-lg text-gray">
              <FaStar size={15} color="gray" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="flex-1 text-sm outline-none"
            />
          </div>
        </div>

        {/* RIGHT SIDE (Button) */}
        <button className=" mr-20 bg-[#003F7F] text-white px-4 py-2 rounded-lg flex items-center text-sm sm:text-base">
          + Create
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-23 mr-23">
        {Array.from({ length: 8 }).map((_, i) => (
          <AccountCard key={i} />
        ))}
      </div>
    </div>
  );
}
