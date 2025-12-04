"use client";

import Navbar2 from "@/app/components/Navbar2";
import ResearcherTabs2 from "@/app/components/ResearcherTabs2";
import PublicationForm from "@/app/components/PublicationForm";
import PublicationPreview from "@/app/components/PublicationPreview";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ResearcherPublication() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* TOP NAV */}
      <Navbar2 />

      {/* RESEARCHER TABS */}
      <div className="px-6 pt-6 ml-24">
        <ResearcherTabs2 />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row gap-36 px-10 mt-10 ml-36 max-w-4xl">

        {/* LEFT : PUBLICATION FORM */}
        <div className="w-full lg:w-[55%]">
          <PublicationForm />
        </div>

        {/* RIGHT : PREVIEW + CHEVRON BUTTONS */}
        <div className="w-full lg:w-[45%] flex items-center justify-center gap-4 mt-24 ml-8">
          
          {/* LEFT ICON */}
          <button className="p-2 rounded-full border bg-white shadow hover:bg-gray-100">
            <FaChevronLeft className="text-gray-700" size={14} />
          </button>

          {/* PREVIEW CARD */}
          <PublicationPreview />

          {/* RIGHT ICON */}
          <button className="p-2 rounded-full border bg-white shadow hover:bg-gray-100">
            <FaChevronRight className="text-gray-700" size={14} />
          </button>

        </div>
      </div>
    </div>
  );
}
