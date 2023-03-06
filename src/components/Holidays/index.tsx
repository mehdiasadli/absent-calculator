import styled from 'styled-components'
import { useEffect } from 'react'
import HolidayList from './HolidayList'
import HolidayButton from './HolidayButton'
import HolidayPicker from './HolidayPicker'
import { useHoliday } from '../../hooks/useHoliday'
import { getRandomId } from '../../utils'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const initialHolidays = [
  { id: 1, value: '2023-03-08' },
  { id: 2, value: '2023-03-20' },
  { id: 3, value: '2023-03-21' },
  { id: 4, value: '2023-03-22' },
  { id: 5, value: '2023-03-23' },
  { id: 6, value: '2023-03-24' },
  { id: 7, value: '2023-04-21' },
  { id: 8, value: '2023-04-24' },
  { id: 9, value: '2023-05-09' },
  { id: 10, value: '2023-05-29' },
  { id: 11, value: '2023-06-14' }
]

export interface DateItem {
  id: number
  value: string
}

interface HolidaysProps {
  setHolidays: (value: string[]) => void
}

export default function Holidays({ setHolidays }: HolidaysProps): JSX.Element {
  const { dates, dateValues, isPickerOpen, setPickerOpen, handleDatePick, handleRemove } =
    useHoliday(initialHolidays)

  useEffect(() => {
    setHolidays(dateValues)
  }, [dates])

  return (
    <Container>
      {isPickerOpen ? (
        <HolidayPicker open={isPickerOpen} onChange={handleDatePick} />
      ) : (
        <HolidayButton setOpen={setPickerOpen} />
      )}
      <HolidayList dates={dates} remove={handleRemove} />
    </Container>
  )
}
