import { useState } from 'react'
import { countWeekdays, getMaxDistances } from '../utils'

interface Data {
  range: [string, string] | null
  limit: number
  weekDays: number[]
  holidays: string[]
}

interface HookReturn {
  limit: number
  handleSelectRange: (dates: [string, string]) => void
  handleSelectLimit: (value: number) => void
  handleSelectWeekdays: (value: number[]) => void
  handleSelectHolidays: (value: string[]) => void
  isBtnDisabled: boolean
  handleCalculate: () => void
  result: string[]
}

export function useCalculation(initialData: Data): HookReturn {
  const [data, setData] = useState<Data>(initialData)
  const [result, setResult] = useState<string[]>([])

  const handleSelectRange = (dates: [string, string]) => {
    setData((prev) => ({ ...prev, range: dates }))
  }
  const handleSelectLimit = (value: number) => {
    setData((prev) => ({ ...prev, limit: value }))
  }
  const handleSelectWeekdays = (value: number[]) => {
    setData((prev) => ({ ...prev, weekDays: value }))
  }
  const handleSelectHolidays = (value: string[]) => {
    setData((prev) => ({ ...prev, holidays: value }))
  }

  const isBtnDisabled =
    !data.range?.length ||
    !data.range[0] ||
    !data.range[1] ||
    !data.limit ||
    !data.weekDays?.length ||
    !data.holidays?.length ||
    !data.weekDays?.length

  const handleCalculate = () => {
    const { range, weekDays, holidays, limit } = data

    console.log(range)
    if (range && range[0] && range[1]) {
      const { count, dates } = countWeekdays(range, weekDays, holidays)
      const indexes = getMaxDistances(count, limit)
      const result = indexes.map((index) => dates[index])
      setResult(result)
    }
  }

  return {
    limit: data.limit,
    handleSelectRange,
    handleSelectLimit,
    handleSelectWeekdays,
    handleSelectHolidays,
    isBtnDisabled,
    handleCalculate,
    result
  }
}
