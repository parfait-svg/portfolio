export default function ContactCard() {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-base font-medium text-gray-700">Contact</h2>
        <button className="text-gray-500 hover:text-gray-700 text-sm">✏️</button>
      </div>

      <div className="space-y-4 text-xs">
        <div className="flex items-center gap-2">
          <span>📧</span>
          <span>ekwogejunior@gmail.com</span>
        </div>

        <div className="flex items-center gap-2">
          <span>🔗</span>
          <a className="text-blue-600 hover:underline" href="#">
            https://www.linkedin.com/in/ekwoge
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span>💬</span>
          <a className="text-blue-600 hover:underline" href="#">
            https://wa.me/627151221212
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span>✖️</span>
          <a className="text-blue-600 hover:underline" href="#">
            https://x.com/username
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span>🐙</span>
          <a className="text-blue-600 hover:underline" href="#">
            https://github.com/username
          </a>
        </div>
      </div>
    </div>
  );
}
