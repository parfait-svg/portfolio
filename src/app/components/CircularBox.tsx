interface Props {
  value: number;
  label: string;
}

export default function CircularBox({ value, label }: Props) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] lg:w-[148px] lg:h-[148px] relative">
        
        <svg viewBox="0 0 40 40" className="w-full h-full">
          {/* Background circle */}
          <circle
            cx="20"
            cy="20"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="3"
            fill="none"
          />

          {/* Animated progress circle */}
          <circle
            cx="20"
            cy="20"
            r={radius}
            stroke="#1E3A5F"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            transform="rotate(-90 20 20)"
            style={{
              transition: "stroke-dashoffset 1.2s ease",
            }}
          />
        </svg>

        {/* Label inside */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xs sm:text-sm md:text-base font-bold text-[#474747]">{value}</p>
          <p className="text-[10px] sm:text-xs md:text-sm text-[#474747]">{label}</p>
        </div>
      </div>
    </div>
  );
}
