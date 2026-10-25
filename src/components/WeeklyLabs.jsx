import { weeks } from '../data/labData'
import WeekCard from './WeekCard'

export default function WeeklyLabs() {
  return (
    <section id="labs" className="section section-tint">
      <div className="container">
        <h2 className="section-title">Weekly Laboratory Records</h2>
        <p className="section-sub">Weeks 1 to 12 of the Java Programming Laboratory.</p>
        <div className="week-grid">
          {weeks.map((w) => (
            <WeekCard key={w.week} data={w} />
          ))}
        </div>
      </div>
    </section>
  )
}
