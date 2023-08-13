import Navigator from "./Components/Navigator"
import Main from "./Components/Main"
import Services from "./Components/Services"
import Slideshow from "./Components/Slideshow"

export default function Home() {
  return (
    <main className="flex flex-col">
            <Navigator/>
      <Main/>
      <Services/>
      <Slideshow/>
    </main>
  )
}
