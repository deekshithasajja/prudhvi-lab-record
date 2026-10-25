import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import WeeklyLabs from './components/WeeklyLabs'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <WeeklyLabs />
      </main>
      <Footer />
    </>
  )
}
