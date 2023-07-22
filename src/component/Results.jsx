

// eslint-disable-next-line react/prop-types
export function Results({ yearResult, monthResult, dayResult}) {
  return (

    <>

  <div className="results__container">
    <div className="results__content">
    <span className="results__date">{yearResult || yearResult  == 0 ? yearResult : "--"}</span>
    <p className="results__text">years</p>
    </div>
    <div className="results__content">
    <span className="results__date">{monthResult || monthResult == 0 ? monthResult : "--"}</span>
    <p className="results__text">months</p>
    </div>
    <div className="results__content">

    <span className="results__date">{dayResult || dayResult == 0 ? dayResult : "--"}</span>
    <p className="results__text">days</p>
    </div>
  </div>
  </>
  )
}

export default Results