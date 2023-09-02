import './globals.css'
import Navigator from './Components/Navigator'
import Footer from './Components/Footer'


export const metadata = {
  title: 'Top Tier Services LLC | Landscaping | Plowing | Construction Services in Wiscosin.',
  description: 'Top Tier Services LLC - Landscaping | Plowing | Construction Services in Wiscosin. We are proud to provide excellent services.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
      <Navigator/>  
      {children}
      <Footer/>
      </body>
    </html>
  )
}
