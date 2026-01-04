const CatIllustration = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Maneki-neko (lucky cat) - gentle outline style */}
      {/* Body */}
      <ellipse
        cx="100"
        cy="170"
        rx="55"
        ry="60"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.12"
      />
      {/* Head */}
      <circle
        cx="100"
        cy="95"
        r="45"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.12"
      />
      {/* Left ear */}
      <path
        d="M60 65 L55 30 L80 55"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.12"
      />
      {/* Right ear */}
      <path
        d="M140 65 L145 30 L120 55"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.12"
      />
      {/* Raised paw (waving) */}
      <path
        d="M145 130 C150 120, 155 100, 160 70 C162 55, 170 50, 175 55 C180 60, 178 75, 175 85"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.15"
      />
      {/* Paw pad details */}
      <circle cx="172" cy="58" r="4" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      {/* Other paw resting */}
      <path
        d="M55 140 C45 145, 40 160, 45 175"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.12"
      />
      {/* Eyes - closed happy expression */}
      <path
        d="M80 95 C82 90, 88 90, 90 95"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.12"
      />
      <path
        d="M110 95 C112 90, 118 90, 120 95"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.12"
      />
      {/* Nose */}
      <path
        d="M97 105 L100 108 L103 105"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.1"
      />
      {/* Mouth */}
      <path
        d="M100 108 L100 112 M95 115 C98 118, 102 118, 105 115"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.1"
      />
      {/* Collar */}
      <path
        d="M70 135 C80 142, 120 142, 130 135"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.1"
      />
      {/* Bell on collar */}
      <circle cx="100" cy="142" r="5" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    </svg>
  );
};

export default CatIllustration;
