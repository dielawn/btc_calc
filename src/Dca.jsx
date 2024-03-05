import { useEffect, useState } from "react"


export function DcaCalc({setAnnualDca, annualDca, setDcaData, yearsUntilWd}) {

    const [dca, setDca] = useState(300)
    const [dcaFreq, setDcaFreq] = useState('bi-weekly')


  
    
    function handleData(obj) {
        setDcaData((prevData) => [
            ...prevData,
            obj,
        ])
    }


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

    function calcData() {

        // Loop through each year with dca and CAGR
        for (let year = 1; year <= yearsUntilWd; year++) {
            let lastYearBeginningValue = 0

            const dataObj = {
                year: year,
                beginningValue: beginningValue,   
                annualDca: annualDca,
                endingValue: endingValue,
                annualGrowth: calcEndValue()
            }

            handleData(dataObj)
            lastYearBeginningValue = dataObj.beginningValue + lastYearBeginningValue
        }

       
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
            <select name="dcaFreqSelect" id="dcaFreqSelect" defaultValue={'bi-weekly'} onChange={(e) => handleDcaFreq(e.target.value)}>
                <option value="annually">Annually</option>
                <option value="monthly">Monthly</option>
                <option value="bi-weekly">Bi-weekly</option>
                <option value="weekly">Weekly</option>
                <option value="daily">Daily</option>
            </select>

            
        </div>
    )

}