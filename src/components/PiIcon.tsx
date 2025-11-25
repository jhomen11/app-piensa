function PiIcon({ className = "w-12 h-12 text-black" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      role="img"
      aria-label="Pi"
    >
      <rect width="128" height="128" rx="12" fill="transparent" />
      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="96"
        fill="currentColor"
      >
        π
      </text>
    </svg>
  )
}

export default PiIcon
