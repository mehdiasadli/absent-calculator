import { useState } from 'react'
import { DatePicker, Typography } from 'antd'
import type { Dayjs } from 'dayjs'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const { RangePicker } = DatePicker
const dateFormat = 'DD.MM.YYYY'

type Date = [Dayjs | null, Dayjs | null] | null

interface RangeProps {
  setRange: (dates: [string, string]) => void
}

export default function Range({ setRange }: RangeProps): JSX.Element {
  const [dates, setDates] = useState<Date>(null)

  const handleChange = (value: Date, dates: [string, string]) => {
    setDates(value)
    setRange(dates)
  }
  return (
    <Container>
      <Typography>Start and End Dates: </Typography>
      <RangePicker value={dates} onChange={handleChange} format={dateFormat} />
    </Container>
  )
}
