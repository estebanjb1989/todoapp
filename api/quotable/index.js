import axios from "axios"

export const getRandomQuote = async () => {
    const response = await axios.get("https://api.quotable.io/quotes/random")    
    return response.data?.[0]
}