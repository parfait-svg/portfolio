"use client";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import ResearcherTabs from "@/app/components/ResearcherTabs";
import {
  FaPencilAlt,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPublish } from "react-icons/md";

export default function ResearcherProfile() {
  return (
    <div className="min-h-screen  bg-[#F5F7FA]">
      <Navbar />

      <div className="p-6 ml-24">
        <ResearcherTabs />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ml-36 mr-36">
        <div className="col-span-2 w-[634px] h-[500px] bg-white rounded-2xl shadow p-5 border border-[#ADADAD]">
          {/* Title row with centered title */}
          <div className="relative mb-6 flex items-center justify-center">
            {/* Centered Title */}
            <h2 className="text-lg font-medium text-gray-700 text-center">
              Personal info
            </h2>

            {/* Pencil icon positioned on the right */}
            <button className="absolute right-0 text-gray-500 hover:text-gray-700 text-sm">
              <FaPencilAlt size={12} color="black" />
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
              <Image
                src="/images/hero.png"
                alt="profile"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>

            <div className="text-left w-full max-w-md">
              <p className="font-medium mb-2">
                Name: <span className="font-normal">Ekwoge Junior</span>
              </p>

              <p className="font-medium mb-2">
                Profession: <span className="font-normal">Data Engineer</span>
              </p>

              <p className="font-medium">About you:</p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                I’m a nonprofit organization dedicated to driving community
                transformation through sustainable, inclusive, and data-driven
                development projects. We work at the grassroots level to
                implement impactful initiatives in health, education,
                environment, and social empowerment.
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT CARD */}
        <div className="bg-white rounded-2xl shadow p-8 h-[330px] border border-[#ADADAD]">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-medium text-gray-700">Contact</h2>
            <button className="text-gray-500 hover:text-gray-700 text-sm">
              <FaPencilAlt size={12} color="black" />
            </button>
          </div>

          <div className="space-y-5 text-sm">
            <div className="flex items-center gap-3">
              <span>
                <MdEmail size={20} />
              </span>
              <span>ekwogejunior@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <span>
                <FaLinkedin size={20} />
              </span>
              <a className="text-blue-600 hover:underline" href="#">
                https://www.linkedin.com/in/ekwoge
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span>
                <FaWhatsapp size={20} />
              </span>
              <a className="text-blue-600 hover:underline" href="#">
                https://wa.me/627151221212
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span>
                <FaXTwitter size={20} />
              </span>
              <a className="text-blue-600 hover:underline" href="#">
                https://x.com/username
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span>
                <FaGithub size={20} />
              </span>
              <a className="text-blue-600 hover:underline" href="#">
                https://github.com/username
              </a>
            </div>
          </div>
        </div>

        {/* SECURITY CARD */}
        <div className="bg-white rounded-2xl shadow p-8 col-span-1 lg:col-start-3 mt-[-170px] h-[150px] border border-[#ADADAD]">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-medium text-gray-700">Security</h2>
            <button className="text-gray-500 hover:text-gray-700 text-sm">
              <FaPencilAlt size={12} color="black" />
            </button>
          </div>

          <p className="text-sm">
            Password: <span className="ml-2 tracking-wider">••••••••••••</span>
          </p>
        </div>
      </div>
    </div>
  );
}
