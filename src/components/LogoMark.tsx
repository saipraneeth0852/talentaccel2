interface LogoMarkProps {
  size?: number;
  className?: string;
}

export const LogoMark = ({ size = 32, className }: LogoMarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 192 192"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="TalentAccel logo mark"
  >
    <g clipPath="url(#logoClip)">
      <path d="M0 85.3333V32H64L106.667 85.3333H0Z" fill="#0A72FF" />
      <path d="M106.667 85.3334H53.3335V192H106.667V85.3334Z" fill="#0A72FF" />
      <path d="M106.667 85.3334H53.3335V192H106.667V85.3334Z" fill="url(#logoGrad)" fillOpacity="0.4" />
      <path d="M138.667 0L117.333 32H160V74.6667L192 53.3333V0H138.667Z" fill="#00E59D" />
    </g>
    <defs>
      <linearGradient id="logoGrad" x1="80.0002" y1="105.333" x2="64.0002" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopOpacity="0" />
        <stop offset="1" />
      </linearGradient>
      <clipPath id="logoClip">
        <rect width="192" height="192" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
