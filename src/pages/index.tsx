import React from "react"
import Navbar from "../components/Navbar"

const Home: React.FC = () => {
  return (
    <section>
      <Navbar />
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>UX Designer & web developer based in Manchester</p>
      </div>
    </section>
  )
}

export default Home
