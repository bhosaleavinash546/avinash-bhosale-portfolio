import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'
import { costCurve } from '../data.js'

function CurveTip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null
  return (
    <div className="chart-tip">
      <strong>{label}</strong>
      {payload.map((p) => (
        <span key={p.dataKey} style={{ color: p.color, display: 'block' }}>
          {p.name}: {p.value}%
        </span>
      ))}
    </div>
  )
}

// The canonical cost-commitment curve — an industry principle (70–80% of cost
// committed by the end of design), not a self-rated metric.
export default function CostCurve() {
  return (
    <div className="curve-wrap">
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={costCurve} margin={{ top: 10, right: 22, left: 4, bottom: 0 }}>
          <defs>
            <linearGradient id="gCommitted" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16395e" stopOpacity={0.22} />
              <stop offset="100%" stopColor="#16395e" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#eceae3" vertical={false} />
          <XAxis dataKey="stage" tick={{ fill: '#515c6b', fontSize: 11.5 }} tickLine={false} axisLine={{ stroke: '#e5e2da' }} interval={0} tickMargin={8} />
          <YAxis tick={{ fill: '#8a93a0', fontSize: 11 }} tickLine={false} axisLine={false} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tickFormatter={(v) => `${v}%`} width={40} />
          <Tooltip content={<CurveTip />} />
          <Area type="monotone" dataKey="committed" name="Cost committed" stroke="#16395e" strokeWidth={2.5} fill="url(#gCommitted)" dot={{ r: 3, fill: '#16395e' }} />
          <Line type="monotone" dataKey="influence" name="Ability to influence" stroke="#9a6f23" strokeWidth={2.5} strokeDasharray="5 4" dot={{ r: 3, fill: '#9a6f23' }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
