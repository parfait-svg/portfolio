import Image from "next/image";

export default function PersonalInfoCard() {
  return (
    <div className="col-span-2 bg-white rounded-xl shadow p-5">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-base font-medium text-gray-700">Personal info</h2>
        <button className="text-gray-500 hover:text-gray-700 text-sm">✏️</button>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
          <Image
            src="/images/hero.png"
            alt="profile"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>

        <div className="text-left w-full max-w-sm">
          <p className="font-medium mb-1">
            Name: <span className="font-normal">Ekwoge Junior</span>
          </p>

          <p className="font-medium mb-1">
            Profession: <span className="font-normal">Data Engineer</span>
          </p>

          <p className="font-medium mt-2">About you:</p>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            I’m a nonprofit organization dedicated to driving community transformation
            through sustainable, inclusive, and data-driven development projects.
          </p>
        </div>
      </div>
    </div>
  );
}
