import axios from "axios"

export const getRandomQuote = async () => {
    const response = await axios.get("https://api.realinspire.tech/v1/quotes/random")    
    return response.data?.[0]
}