import axios from 'axios'
import React, {useEffect, useState} from 'react'

function App() {

    const [meanings, setMeanings] = useState([])

    const dictionaryApi = async () =>{
        try {
            const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en_US/hello')

            setMeanings(data.data)
            
        } catch(error) {
            console.log(error)
        }
    }

    console.log(meanings)

    useEffect(() => {
        dictionaryApi()
    }, [])

    return <div>Hello World!</div>
}

export default App