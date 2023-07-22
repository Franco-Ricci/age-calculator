import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export function ResultButton({ daySelected, monthSelected, yearSelected,setError, setYearResult,setMonthResult, setDayResult, }){

  const resetValues = () => {
    setDayResult(null)
    setMonthResult(null)
    setYearResult(null)
  }
  function handlerClick() {
      
    if(daySelected == null || monthSelected == null || yearSelected == null ){
      setError("empty")
    }
     if(daySelected > 31){
      setError("invalidD")
    } 
  }
    useEffect(() => {
        if (daySelected && monthSelected && yearSelected) {
          const date = new Date();
          const currentYear = date.getFullYear();
          const currentMonth = date.getMonth() + 1;
          const currentDay = date.getDate();
    
          const parsedDay = parseInt(daySelected);
          const parsedMonth = parseInt(monthSelected);
          const parsedYear = parseInt(yearSelected);

          if (parsedYear % 4 === 0 && parsedMonth === 2 && parsedDay > 29) {
            console.log("Invalid day for February in a leap year");
            setError("Leap")
  
            resetValues()
          }else if(parsedYear % 4 !== 0 && parsedMonth === 2 && parsedDay > 28){
            setError("Leap")
   
            resetValues()
          }else if(parsedMonth === 2 && parsedDay > 29){
            setError("Leap")
   
            resetValues()
    
          } else if (
            (parsedMonth === 4 || parsedMonth === 6 || parsedMonth === 9 || parsedMonth === 11) &&
            parsedDay > 30
          ) {
            console.log("Invalid day for the selected month");
            setError("invalidD")
    
            resetValues()
          }else if(parsedMonth > 12 && parsedDay > 31 || parsedMonth > 12) {
            resetValues()
            setError("invalidY")
      
          }else if(parsedYear > currentYear || parsedYear < 1900){
            console.log("errorrrrr")
            setError("invalidY")
            resetValues()

          } else {
            const diffYears = currentYear - parsedYear;
            const diffMonths = currentMonth - parsedMonth;
            const diffDays = currentDay < parsedDay ? currentDay + (31 - parsedDay) : currentDay - parsedDay;
            console.log(currentDay - parsedDay)
            setError(false)
            setYearResult(diffYears);
            setMonthResult(diffMonths >= 0 ? diffMonths : 12 - Math.abs(diffMonths));
            setDayResult(diffDays);
          }
        }
     
      }, [daySelected, monthSelected, yearSelected]);

  
      return (
        <div className="button__container">
          <hr className="button__line"></hr>
        <button className="button" onClick={handlerClick}></button>
      </div>
        )
}
export default ResultButton
