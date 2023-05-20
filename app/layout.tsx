import './globals.css'
import React, {FC} from 'react'

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
      <body className="text-white bg-green-800/25">
      <div className="md:container md:mx-auto h-screen bg-yellow-800/50 drop-shadow-container">
        {children}
      </div>
      </body>
      </html>
  )
}

export default RootLayout