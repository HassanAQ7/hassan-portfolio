/** Two poles, one crossarm each, three sagging wires. White strokes, no fill. */
export function PowerLines() {
  return (
    <svg className="power-lines" viewBox="0 0 420 168" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M72 150 V26" />
        <path d="M36 44 H108" />

        <path d="M348 150 V26" />
        <path d="M312 44 H384" />

        <path d="M36 44 Q210 155 384 44" />
        <path d="M72 44 Q210 108 348 44" />
        <path d="M108 44 Q210 92 312 44" />
      </g>
    </svg>
  )
}
