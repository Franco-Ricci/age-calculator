
// eslint-disable-next-line react/prop-types
export function InputForm({ error, setDaySelected, setMonthSelected, setYearSelected, monthSelected, daySelected, yearSelected}) {

    const getDate = (e) => {
        const nameDate = e.target.getAttribute("data-name");
    
        if (nameDate === "day" && e.target.value >= 0 ) {
          setDaySelected(e.target.value);

        } else if (nameDate === "month" && e.target.value >= 0 ) {
          setMonthSelected(e.target.value);

        } else if (nameDate === "year" && e.target.value >= 0) {
          setYearSelected(e.target.value);

        }
      };
    
  return (
    
    <div className="input__container">
      <div className="input__content">
      <label className={error || error =="invalidD" || daySelected > 31 ?  "input__title input__title--error" : "input__title"} htmlFor="day">day</label>
      <input className={error || error =="invalidD" || daySelected > 31 ? "input__text input__text--error" : "input__text" }  onChange={getDate} data-name="day" id="day" min={1} type="number" placeholder="DD" />
      <span className="input__showError">{error == "empty" || daySelected == "" ? "This field is required" : error == "Leap" || error =="invalidD" || daySelected > 31 ? "Must be a valid day" : ""}</span>

      </div>
      <div className="input__content">

      <label className={error || monthSelected > 12 ?  "input__title input__title--error" : "input__title"} htmlFor="month">month</label>
      <input className={error || monthSelected > 12  ? "input__text input__text--error" : "input__text" } onChange={getDate} data-name="month"  id="month" min={1}  type="number" placeholder="MM" />
      <span className="input__showError">{error == "empty" || monthSelected == ""  ?"This field is required" : monthSelected > 12 ? "Must be a valid Month" : ""}</span>

      </div>

      <div className="input__content">

      <label className={error ?  "input__title input__title--error" : "input__title"}  htmlFor="year">year</label>
      <input className={error ? "input__text input__text--error" : "input__text" }  onChange={getDate} data-name="year" id="year" min={0} type="number" placeholder="YYYY" />
      <span className="input__showError">{error && (error == "empty" || yearSelected == "" || yearSelected == 0 ? "This field is required" : yearSelected < 1900 ? "Must be from 1900" : yearSelected > new Date().getFullYear() ? "Must be in the past" : "")}</span>

      </div>

   
    </div>
 
  )
}
export default InputForm
