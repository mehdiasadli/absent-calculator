import { useState } from 'react'
import { getRandomId } from '../utils'

export interface DateItem {
  id: number
  value: string
}

interface HookReturn {
  dates: DateItem[]
  dateValues: string[]
  isPickerOpen: boolean
  handleDatePick: (_: any, dateString: string | null) => void
  setPickerOpen: () => void
  handleRemove: (id: number) => void
}

export function useHoliday(initialHolidays: DateItem[]): HookReturn {
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const [dates, setDates] = useState<DateItem[]>(initialHolidays)

  const handleRemove = (id: number) => {
    setDates((prev) => prev.filter((item) => item.id !== id))
  }

  const handleDatePick = (_: any, dateString: string | null) => {
    if (dateString && !dates.find((date) => date.value === dateString)) {
      setIsPickerOpen(false)
      const newItem = {
        id: getRandomId(),
        value: dateString
      }
      setDates((prev) => [newItem, ...prev])
    }
  }

  const setPickerOpen = () => {
    setIsPickerOpen(true)
  }

  return {
    dates,
    dateValues: dates.map((item) => item.value),
    isPickerOpen,
    handleDatePick,
    setPickerOpen,
    handleRemove
  }
}
