// create your App component here
import { useState,useEffect } from "react";

function App(){
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => {
            setData(data)
            setIsLoaded(true)
        })
    }, [])


    if (!isLoaded) return <p>Loading...</p>

    return (
        <img src={data.message} alt="A Random Dog" />
    )

}

export default App