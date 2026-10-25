import { student } from '../data/labData'

const rows = [
  { icon: '👤', label: 'Student Name', value: student.name },
  { icon: '🆔', label: 'Roll Number', value: student.rollNo },
  { icon: '🎓', label: 'Branch', value: student.branch },
  { icon: '📚', label: 'Section', value: student.section },
  { icon: '💻', label: 'Laboratory Subject', value: student.subject },
]

export default function Profile() {
  return (
    <section id="profile" className="section">
      <div className="container">
        <h2 className="section-title">Student Profile</h2>
        <div className="profile-card">
          {rows.map((r) => (
            <div className="profile-row" key={r.label}>
              <span className="profile-icon">{r.icon}</span>
              <div>
                <p className="profile-label">{r.label}</p>
                <p className="profile-value">{r.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
