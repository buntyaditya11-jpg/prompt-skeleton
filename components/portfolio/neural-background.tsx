const layers = [4, 6, 6, 5, 3]
const width = 1200
const height = 640

const nodes = layers.map((count, layerIndex) => {
  const x = 120 + (layerIndex * (width - 240)) / (layers.length - 1)
  return Array.from({ length: count }, (_, i) => ({
    x,
    y: ((i + 1) * height) / (count + 1),
  }))
})

const edges = nodes.slice(0, -1).flatMap((layer, layerIndex) =>
  layer.flatMap((from, i) =>
    nodes[layerIndex + 1]
      .filter((_, j) => (i + j + layerIndex) % 2 === 0)
      .map((to) => ({ from, to })),
  ),
)

export function NeuralBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[48px_48px] opacity-25 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full opacity-40"
      >
        <g stroke="var(--primary)" strokeWidth="0.75" strokeOpacity="0.35">
          {edges.map(({ from, to }, i) => (
            <line key={i} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
          ))}
        </g>
        {nodes.flat().map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={i % 3 === 0 ? 5 : 3.5}
            fill={i % 4 === 0 ? 'var(--accent)' : 'var(--primary)'}
            className="animate-pulse-node"
            style={{ animationDelay: `${(i % 7) * 0.5}s` }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/60 to-background" />
    </div>
  )
}
