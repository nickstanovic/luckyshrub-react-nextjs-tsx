import './globals.css'
import React, {FC} from 'react'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Nav from "@/components/Nav"

interface Props {
  children: React.ReactNode

}
export const metadata = {
  openGraph: {
    title: 'Lucky Shrub',
    description: "Bring life to your living spaces with Lucky Shrub diverse collection of indoor and outdoor plants",
    url: 'https://nickstanovic.github.io/lucky-shrub/',
    siteName: 'Lucky Shrub',
    images: [
      {
        url: '\public\img\lucky-shrub.webp',
      }
    ],
    locale: 'en-US',
    type: 'website',
  },
};

const RootLayout: FC<Props> = ({children}) => {
  return (
      <html lang="en">
      <body className="text-lg text-white lg:text-2xl bg-green-800/30">
          <div className="md:container md:mx-auto min-h-screen drop-shadow-container bg-clay">
              <Header />
              <Nav />
              {children}
          </div>
        <Footer />
      </body>
      </html>
  )
}

export default RootLayout