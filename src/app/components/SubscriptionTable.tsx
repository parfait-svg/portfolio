import React from "react";

interface BillingItem {
  username: string;
  email: string;
  amount: string;
  startDate: string;
  startTime: string;
  nextDate: string;
  nextTime: string;
}

interface BillingTableProps {
  data?: BillingItem[];
}

export default function BillingTable({ data = [] }: BillingTableProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full overflow-x-auto px-[30px] flex justify-center">
      
      {/* Reduced table width */}
      <div className="w-full max-w-[800px]">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="text-left text-gray-500 text-sm border-b">
              <th className="pb-3">Username</th>
              <th className="pb-3">Email</th>
              <th className="pb-3">Total Amount</th>
              <th className="pb-3">Started At</th>
              <th className="pb-3">Next Billing Date</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-400">
                  No data available
                </td>
              </tr>
            ) : (
              data.map((item, i) => (
                <tr key={i} className="border-b last:border-none text-sm">
                  <td className="py-4 font-medium">{item.username}</td>
                  <td className="py-4">{item.email}</td>
                  <td className="py-4">{item.amount}</td>

                  <td className="py-4">
                    <p>Date: {item.startDate}</p>
                    <p className="text-xs text-gray-500">Time: {item.startTime}</p>
                  </td>

                  <td className="py-4">
                    <p>Date: {item.nextDate}</p>
                    <p className="text-xs text-gray-500">Time: {item.nextTime}</p>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
