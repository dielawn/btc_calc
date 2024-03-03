import { useEffect, useState } from "react"


export default function BTCPrice({setBtcPrice, setError, setBtcData}) {
       

    useEffect(() => {
        const fetchBtcPrice = async () => {
            try {
                const response = await fetch(`https://api.coinbase.com/v2/prices/BTC-USD/spot`)
                const json = await response.json()
                const price = json.data.amount
                
                setBtcPrice(price)
            } catch (error) {
                setError(`Error fetching BTC price ${error}`)
                setBtcPrice(69420404)
            }
        }
        
       fetchBtcPrice()
    }, [])

    
}