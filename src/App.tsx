import { Suspense } from "react"
import About from "./pages/About"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import Prices from "./pages/Prices"
import Topics from "./pages/Topics"
import "./style/main.scss"

const App = () => {
  return (
    <Suspense fallback={<div className="loading-screen">Loading...</div>}>
      <div className="content-container">
        <Home />
        <Topics />
        <About />
        <Prices />
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
