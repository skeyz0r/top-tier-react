import Navigator from "./Components/Navigator"
import Main from "./Components/Main"
import Services from "./Components/Services"

export default function Home() {
  return (
    <main className="flex flex-col">
            <Navigator/>
      <Main/>
      <Services/>
    </main>
  )
}
