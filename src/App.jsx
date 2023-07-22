import "./index.css";
import { InputForm } from "./component/InputForm";
import { ResultButton } from "./component/ResultButton";
import {Results} from "./component/Results";
import {Footer} from "./component/Footer";
import { useState } from "react";
function App() {
  const [daySelected, setDaySelected] = useState(null);
  const [monthSelected, setMonthSelected] = useState(null);
  const [yearSelected, setYearSelected] = useState(null);
  const [yearResult, setYearResult] = useState(null);
  const [monthResult, setMonthResult] = useState(null);
  const [dayResult, setDayResult] = useState(null);

  const [error, setError] = useState(false);

  return (
    <>
      <main className="main__container">


      <InputForm
        error={error}
        daySelected={daySelected}
        monthSelected={monthSelected}
        yearSelected={yearSelected}
        setMonthSelected={setMonthSelected}
        setYearSelected={setYearSelected}
        setDaySelected={setDaySelected}
      />
      <ResultButton
        setError={setError}
        daySelected={daySelected}
        monthSelected={monthSelected}
        yearSelected={yearSelected}
        setYearResult={setYearResult}
        setMonthResult={setMonthResult}
        setDayResult={setDayResult}
        dayResult={dayResult}
        monthResult={monthResult}
        yearResult={yearResult}
      />
      <Results yearResult={yearResult} monthResult={monthResult} dayResult={dayResult} />

      </main>
      <Footer />
      </>
  );
}

export default App;
