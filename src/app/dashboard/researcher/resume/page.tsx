"use client";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import ResearcherTabs from "@/app/components/ResearcherTabs";

export default function ResearcherResume() {
  return (
    <div className="min-h-screen  bg-[#F5F7FA]">
      <Navbar />

      <div className="p-6 ml-24">
        <ResearcherTabs />
      </div>
    </div>
  );
}
