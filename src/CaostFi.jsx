export function CoastFi({rateOfReturn, setRateOfReturn, yearsUntilWd, setYearsUntilWd}) {

    return (      
            <div className='flexColumn justifyRight'>
                <label htmlFor="annRORInput">Annual % Rate of Return:{' '}  
                <input 
                    type="number"
                    id='annRORInput'
                    value={rateOfReturn}
                    onChange={(e) => setRateOfReturn(e.target.value)}
                />
                </label>
                <label htmlFor="yearUntilWdInput">Number of years until withdrawls begin:{' '} 
                <input 
                    type="number"
                    id='yearUntilWdInput'
                    value={yearsUntilWd}
                    onChange={(e) => setYearsUntilWd(e.target.value)}
                />
                </label>
            </div>
    )
}