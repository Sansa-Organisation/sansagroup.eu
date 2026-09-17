export function SansaMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="11"
        fill="#0B1016"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="1.5"
      />
      <path
        d="M12.5 26.2c2.6 2 6.1 2.4 9.1 1.3 2.3-.9 3.4-2.3 3.4-4 0-2.8-3.1-3.4-6-3.9-3-.6-6.1-1.2-6.1-4.1 0-2.1 2.2-3.6 5.4-3.8 2.5-.2 5 .5 7 1.8"
        stroke="#2EE6A8"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="28.2" cy="12.4" r="1.8" fill="#2EE6A8" />
    </svg>
  );
}
