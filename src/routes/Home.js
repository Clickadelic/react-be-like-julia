import React,{useState, useEffect} from 'react'


function Home() {

    // Mein Problem besteht oft darin, im Objekt den richtigen Knoten zu finden.

    // Es kostet mich meeeeeeeeega viel Zeit - geht einfach nicht klar...
    // War schon wieder 2 Uhr heute Nacht...
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // Szenario
    // WordPress als Rest-Quelle mit folgendem Endpunkt:
    // 
    // https://wpdb.tobias-hopp.de/wp-json/wp/v2/posts/
    // 
    // Für posts kommen zwei Objekte zurück in einem Array - also richtig
    async function getPosts(){
      setIsLoading(true)
      const response = await fetch("https://wpdb.tobias-hopp.de/wp-json/wp/v2/posts/")
                  
      const currentData = await response.json()
      console.log(currentData)
      setData(currentData)
      console.log(data)
      setIsLoading(false)
    }

    useEffect(() => {
      getPosts()
    }, [])

    return (
      <div>Something</div>
    )
}

export default Home