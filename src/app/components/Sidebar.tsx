"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-start m-6">
      <div className="flex items-center gap-4 p-4">

        {/* ACCOUNTS */}
        <Link href="/dashboard/accounts">
          <div
            className={`cursor-pointer px-4 py-1 transition text-sm rounded-[15px]
            ${
              pathname === "/dashboard/accounts"
                ? "bg-[#E6EEF7] text-[#474747]"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            Accounts
          </div>
        </Link>

        {/* SUBSCRIPTION */}
        <Link href="/dashboard/subscriptions">
          <div
            className={`cursor-pointer px-4 py-1 transition text-sm rounded-[15px]
            ${
              pathname === "/dashboard/subscriptions"
                ? "bg-[#E6EEF7] text-[#474747]"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Subscription
          </div>
        </Link>

      </div>
    </div>
  );
}
