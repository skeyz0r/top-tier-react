import Main from "./Components/Main"
import Services from "./Components/Services"
import Navigator from "./Components/Navigator"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Main/>
      <Services/>
      <Navigator/>
    </main>
  )
}
