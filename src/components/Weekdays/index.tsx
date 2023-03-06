import { Select } from 'antd'
import type { SelectProps } from 'antd'

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const options: SelectProps['options'] = weekdays.map((item, i) => ({
  value: i + 1,
  label: item
}))

interface WeekdaysProps {
  setWeekdays: (value: number[]) => void
}

export default function Weekdays({ setWeekdays }: WeekdaysProps): JSX.Element {
  const handleChange = (value: number[]) => {
    setWeekdays(value)
  }

  return (
    <Select
      mode='multiple'
      allowClear
      style={{ width: 300 }}
      placeholder='Please select weekdays'
      onChange={handleChange}
      options={options}
    />
  )
}
