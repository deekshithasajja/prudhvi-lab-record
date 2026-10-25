import { student } from '../data/labData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-name">{student.name}</p>
        <p>Roll Number: {student.rollNo}</p>
        <p>{student.subject}</p>
        <p className="footer-copy">© {new Date().getFullYear()} {student.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
