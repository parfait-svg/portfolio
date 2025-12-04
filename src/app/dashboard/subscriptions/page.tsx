import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { FaStar } from "react-icons/fa6";
import { FaDownload, FaFilter } from "react-icons/fa";
import ChartCard from "../../components/ChartCard";
import SubscriptionTable from "@/app/components/SubscriptionTable";
import { FaUsers, FaMoneyBill, FaChartLine } from "react-icons/fa";

export default function subscriptionPage() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="flex justify-end items-center gap-4 px-4 sm:px-10 mt-4 mb-6">
        {/* Export Button */}
        <button className="flex items-center gap-2 bg-[#003F7F] text-white px-4 py-2 rounded-lg text-sm sm:text-base">
          <FaDownload size={16} />
          Export
        </button>

        {/* Filter Button */}
        <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm sm:text-base text-gray-700">
          <FaFilter size={16} />
          Filter
        </button>
      </div>

      <div className="m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        <ChartCard
          icon="/images/tusers.png"
          value="100"
          label="Total Subscriptions"
          graph="/images/grap.png"
        />

        <ChartCard
          icon="/images/dollar.png"
          value="$12,400"
          label="Total Revenue"
          graph="/images/grap.png"
        />

        <ChartCard
          icon="/images/round.png"
          value="12%"
          label="Renewal Rate"
          graph="/images/grap.png"
        />
      </div>
      <div>
        <SubscriptionTable />
      </div>
    </div>
  );
}
