import Main from "./Components/Main"
import Services from "./Components/Services"
import Buttons from "./Components/Buttons"
import Slideshow from "./Components/Slideshow"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Main/>
      <Services/>
      <Buttons/>
      <Slideshow/>
      </main>
      )}