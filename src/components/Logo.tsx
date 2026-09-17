export function SansaMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect x="1" y="1" width="38" height="38" rx="11" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
      <rect x="6" y="6" width="28" height="28" rx="8" fill="#2EE6A8" fillOpacity="0.12" stroke="#2EE6A8" strokeOpacity="0.5" strokeWidth="1" />
      <path
        d="M12 25.5c2.4 1.8 5.6 2.2 8.4 1.2 2.1-.8 3.1-2.1 3.1-3.6 0-2.5-2.8-3-5.4-3.5-2.8-.5-5.6-1.1-5.6-3.7 0-1.9 2-3.2 4.9-3.4 2.3-.2 4.6.4 6.4 1.6"
        stroke="#2EE6A8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="28.5" cy="12.5" r="2" fill="#2EE6A8" />
    </svg>
  );
}
