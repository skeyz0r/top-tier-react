import './globals.css'
import Navigator from './Components/Navigator'
import Footer from './Components/Footer'
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
 
  title: 'Top Tier Services in Wiscosin.',
  description: 'Top Tier Services LLC - Landscaping | Plowing | Construction Services in Wiscosin. CALL RIGHT NOW TO GET A FREE QUOTE!',
  keywords: ['Top Tier Services', 'Landscapig in wisconsin', 'plowing in wisconsin', 'construction in wisconsin', 'wisconsin local landscaping'],
  siteName: 'Top Tier Services | Landscaping | Plowing | Construction | Services in Wiscosin.',
  locale: 'en-US',
  type: 'website',
  openGraph: {
    title: 'Top Tier Services | Landscaping | Plowing | Construction Services in Wiscosin',
    url: 'https://top-tier-services-com',
    siteName: 'Top Tier Services',
  },

};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
     <Script async src="https://www.googletagmanager.com/gtag/js?id=G-67DGW203H2"/>
      <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-67DGW203H2');
        `,
        }}
    />
      <body>
      <Navigator/>  
      {children}
      <Footer/>
      </body>
      <Analytics/>
    </html>
  )
}
