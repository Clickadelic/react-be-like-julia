import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Layout({children}) {
    // Helper Funktion, müsste ausgelagert werden
    // "Normalisiert den Pfad" >> nimme aktuelle URL /irgendwas und entfernt den Slash
    const location = useLocation()
    const path = location.pathname
    let slug = path

    if(path === '/'){
      slug = 'home'
    } else {
      slug = slug.replace(/\\|\//g,'')
    }

    return (
      <div className={`App-background-${slug}`}>
          <Header />
            <Main children={children}  />
          <Footer />
      </div>
    )
}

export default Layout