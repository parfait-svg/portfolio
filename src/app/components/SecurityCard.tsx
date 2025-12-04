export default function SecurityCard() {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-base font-medium text-gray-700">Security</h2>
        <button className="text-gray-500 hover:text-gray-700 text-sm">✏️</button>
      </div>

      <p className="text-xs">
        Password: <span className="ml-1 tracking-wider">••••••••••••</span>
      </p>
    </div>
  );
}
