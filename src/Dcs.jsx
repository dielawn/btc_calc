import { useEffect, useState } from "react"


export function DcaCalc({setAnnualDca}) {

    const [dca, setDca] = useState(300)
    const [dcaFreq, setDcaFreq] = useState('bi-weekly')

    const dcaFreqValues = {
        'annually': 1,
        'monthly': 12,
        'bi-weekly': 26,
        'weekly': 52,
        'daily': 365,
      }

    useEffect(() => {
        setAnnualDca( dca * dcaFreqValues[dcaFreq])
    }, [dca, dcaFreq ])

    function handDcaChange(e) {
        const dcaValue = Number(e.target.value)
        setDca(dcaValue)
    }

    function handleDcaFreq(interval) {
       setDcaFreq(interval)
    }

    return (
        <div>
            <label htmlFor="dcaInput">
                <input 
                    type="number"
                    id="dcaInput"
                    value={dca}
                    onChange={(e) => handDcaChange(e)}
                />
            </label>
            <select name="dcaFreqSelect" id="dcaFreqSelect" onChange={(e) => handleDcaFreq(e.target.value)}>
                <option value="annually">Annually</option>
                <option value="monthly">Monthly</option>
                <option selected value="bi-weekly">Bi-weekly</option>
                <option value="weekly">Weekly</option>
                <option value="daily">Daily</option>
            </select>

            
        </div>
    )

}