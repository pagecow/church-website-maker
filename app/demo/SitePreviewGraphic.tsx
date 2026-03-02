type SitePreviewGraphicProps = {
  churchName: string;
  lineOne: string;
  lineTwo: string;
  colorA: string;
  colorB: string;
};

export default function SitePreviewGraphic({
  churchName,
  lineOne,
  lineTwo,
  colorA,
  colorB,
}: SitePreviewGraphicProps) {
  const gradientId = churchName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <svg
        viewBox="0 0 1200 680"
        role="img"
        aria-label={`${churchName} demo hero`}
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${gradientId}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorA} />
            <stop offset="100%" stopColor={colorB} />
          </linearGradient>
        </defs>

        <rect width="1200" height="680" fill={`url(#${gradientId}-grad)`} />
        <circle cx="1070" cy="120" r="160" fill="rgba(255,255,255,0.10)" />
        <circle cx="120" cy="600" r="200" fill="rgba(255,255,255,0.08)" />
        <rect x="140" y="120" width="920" height="420" rx="24" fill="rgba(0,0,0,0.18)" />

        <text
          x="180"
          y="240"
          fill="#ffffff"
          fontSize="54"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="700"
        >
          {churchName}
        </text>
        <text
          x="180"
          y="305"
          fill="#dbeafe"
          fontSize="30"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="500"
        >
          {lineOne}
        </text>
        <text
          x="180"
          y="355"
          fill="#dbeafe"
          fontSize="30"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="500"
        >
          {lineTwo}
        </text>

        <rect x="180" y="420" width="240" height="56" rx="10" fill="#fbbf24" />
        <text
          x="300"
          y="456"
          textAnchor="middle"
          fill="#111827"
          fontSize="26"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="700"
        >
          Plan Your Visit
        </text>
      </svg>
    </div>
  );
}
