import { useState } from "react";
import { numberWithCommas } from './utils'

export function CAGR({annualDca}) {
    const [beginningValue, setBeginningValue] = useState(0)
    const [years, setYears] = useState(4)
    const [cagr, setCAGR] = useState(.262)

    
    function calcCAGR() {
        return ((endingValue / beginningValue) ** (1 / years)) - 1
    }

    function calcEndValue() {
        return beginningValue * ((1 + cagr) ** years)
    }
    const endingValue = calcEndValue()


    return (
        <div className='flexColumn justifyRight'>    
            <label htmlFor="begValInput">Beginning Value:{' '}  
            <input 
                type="number"
                id='begValInput'
                value={beginningValue}
                onChange={(e) => setBeginningValue(e.target.value)}
            />
            </label>
            <label htmlFor="yearOfCAGRInput">Number of years:{' '} 
            <input 
                type="number"
                id='yearOfCAGRInput'
                value={years}
                onChange={(e) => setYears(e.target.value)}
            />
            </label>
            <label htmlFor="endValueInput">CAGR:{' '} 
            <input 
                type="number"
                id='endValueInput'
                value={cagr}
                onChange={(e) => setCAGR(e.target.value)}
            />
            </label>
            {beginningValue > 0 && (<p>${numberWithCommas(endingValue.toFixed(2))}</p>)}
        </div>
    )
}