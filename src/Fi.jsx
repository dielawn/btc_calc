
export function Fi({annualExpenses, setAnnualExpenses, yearsOfWd, setYearsOfWd}) {


    return (
        <div>
            <p>Financial Independence rule of thumb Annual expenses * 25 years </p>

            <div className='flexColumn justifyRight'>
            
            <label htmlFor="annExpInput">Annual Expenses:{' '}  
            <input 
                type="number"
                id='annExpInput'
                value={annualExpenses}
                onChange={(e) => setAnnualExpenses(e.target.value)}
            />
            </label>
            <label htmlFor="yearOfWdInput">Number of years of withdrawls:{' '} 
            <input 
                type="number"
                id='yearOfWdInput'
                value={yearsOfWd}
                onChange={(e) => setYearsOfWd(e.target.value)}
            />
            </label>
            </div>
        </div>
    )
}