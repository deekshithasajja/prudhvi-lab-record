import { student } from '../data/labData'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-blob blob-a" />
      <div className="hero-blob blob-b" />
      <div className="container hero-inner">
        <p className="hero-tag">{student.branchShort} • SECTION {student.section}</p>
        <h1>
          JAVA PROGRAMMING
          <br />
          LABORATORY RECORD
        </h1>
        <p className="hero-name">{student.nameUpper}</p>
        <p className="hero-roll">Roll Number: {student.rollNo}</p>
        <p className="hero-subject">{student.subject}</p>
        <p className="hero-intro">
          This website contains my Java laboratory exercises and weekly practical
          records, with a PDF for every week that has a submission.
        </p>
        <a href="#labs" className="btn btn-light">
          Explore Weekly Labs
        </a>
      </div>
    </section>
  )
}
