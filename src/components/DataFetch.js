import React from 'react'
import {useState, useEffect} from 'react'

function DataFetch() {

    const [data, setData] = useState([])


    async function getData(){
        const endpoint = "https://wpdb.tobias-hopp.de/wp-json/wp/v2/posts/"
        const result = await fetch(endpoint)
        const jsonData = result.json()
        setData(jsonData)
    }
    
    useEffect(()=> {
        getData()
    }, [])

    const listOfPosts = data.map((post, index) => {
        return (
            <li key={index}>{post}</li>
        )
    })
    return (
        {listOfPosts}
    )
}

export default DataFetch