import { useEffect, useState } from "react"


export function DcaCalc({setAnnualDca, annualDca, setDcaData, yearsUntilWd}) {

    const [dca, setDca] = useState(300)
    const [dcaFreq, setDcaFreq] = useState('bi-weekly')
    const [growthRate, setGrowthRate] = useState(5)

    function calcData() {
        let localBeginningValue = beginningValue

        for (let year = 1; year <= yearsUntilWd; year++) {
            
            const annualIncrease = localBeginningValue * (growthRate / 100)
            const endYearValue = localBeginningValue + annualIncrease + annualDca
          
            const dataObj = {
                year: year,
                beginningValue: localBeginningValue,   
                annualDca: annualDca,
                annualGrowth: annualIncrease,
                endYearValue: endYearValue,
            }

            handleData(dataObj)
            localBeginningValue = endYearValue
        }       
    }

    
    function handleData(obj) {
        setDcaData((prevData) => [...prevData, obj])
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