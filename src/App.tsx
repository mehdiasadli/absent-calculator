import Button from './components/Button'
import Holidays from './components/Holidays'
import Layout from './components/Layout'
import Limit from './components/Limit'
import Range from './components/Range'
import ResultList from './components/ResultList'
import Weekdays from './components/Weekdays'
import { useCalculation } from './hooks/useCalculation'

const initialData = {
  range: null,
  limit: 1,
  weekDays: [],
  holidays: []
}

export default function App() {
  const {
    handleSelectRange,
    handleSelectLimit,
    limit,
    handleSelectWeekdays,
    handleSelectHolidays,
    isBtnDisabled,
    handleCalculate,
    result
  } = useCalculation(initialData)

  return (
    <Layout>
      <Range setRange={handleSelectRange} />
      <Limit limit={limit} setLimit={handleSelectLimit} />
      <Weekdays setWeekdays={handleSelectWeekdays} />
      <Holidays setHolidays={handleSelectHolidays} />
      <Button disabled={isBtnDisabled} calculate={handleCalculate} />
      <ResultList result={result} />
    </Layout>
  )
}
