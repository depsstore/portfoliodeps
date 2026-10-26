import React, { useState, useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { SplashScreen } from './components/SplashScreen/SplashScreen' // Import Splash Screen

import 'react-toastify/dist/ReactToastify.css'

function App() {
  // State untuk mengatur apakah Splash Screen masih tampil
  const [isLoading, setIsLoading] = useState(true)

  // Mencegah user nge-scroll selama Splash Screen muncul
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isLoading])

  return (
    <>
      <GlobalStyle />
      
      {/* 
        Jika isLoading true, tampilkan SplashScreen. 
        Jika false, tampilkan seluruh isi website.
      */}
      {isLoading ? (
        <SplashScreen onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
          <Analytics />
        </>
      )}
    </>
  )
}

export default App