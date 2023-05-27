import './globals.css'
import React, {FC} from 'react'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Nav from "@/components/Nav"
import {Metadata} from "next"
import BottomNav from "@/components/BottomNav"


export const metadata: Metadata = {
    title: 'Welcome to Lucky Shrub',
    description: 'Bring life to your living spaces with Lucky Shrub diverse collection of indoor and outdoor plants',
    openGraph: {
        title: 'Lucky Shrub',
        description: "Bring life to your living spaces with Lucky Shrub diverse collection of indoor and outdoor plants",
        url: 'https://nickstanovic.github.io/lucky-shrub/',
        siteName: 'Lucky Shrub',
        images: [
            {
                url: '/public/img/lucky-shrub.webp',
            }
        ],
        locale: 'en-US',
        type: 'website',
    },
}

interface Props {
  children: React.ReactNode
}

const RootLayout: FC<Props> = ({children}) => {
  return (
      <html lang="en">
      <body className="text-xl text-grass font-bold lg:text-2xl bg-green-800/30">
          <div className="lg:container md:mx-auto min-h-screen drop-shadow-container bg-clay pb-12">
              <Header />
              <Nav />
              {children}
          </div>
        <Footer />
        <BottomNav />
      </body>
      </html>
  )
}

export default RootLayout