import { DatePicker } from 'antd'

interface HolidayPickerProps {
  open: boolean
  onChange: (_: any, dateString: string | null) => void
}

export default function HolidayPicker({ open, onChange }: HolidayPickerProps): JSX.Element {
  return <DatePicker autoFocus open={open} onChange={onChange} style={{ width: '20rem' }} />
}
