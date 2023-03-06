import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

interface HolidayButtonProps {
  setOpen: () => void
}

export default function HolidayButton({ setOpen }: HolidayButtonProps): JSX.Element {
  return (
    <Button icon={<PlusOutlined />} onClick={setOpen} style={{ width: '20rem' }}>
      Add a holiday
    </Button>
  )
}
