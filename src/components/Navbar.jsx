import { useState } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'labs', label: 'Weekly Labs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <span className="brand-mark">J</span>
          Java Lab Record
        </a>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
